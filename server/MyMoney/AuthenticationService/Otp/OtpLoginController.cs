using AuthenticationService.Utils;
using Authentication.Core;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Communication.Http;

namespace AuthenticationService.Login
{
    [ApiController]
    [Route("otp")]
    public class OtpLoginController : Controller
    {
        private OtpLoginRepository Repository { get; }

        public OtpLoginController(MongoConnection mongoConnection) {
            Repository = new OtpLoginRepository(mongoConnection);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(OtpLoginDetails details, [FromServices] ICodeGenerator codeGenerator, [FromServices] HttpCommunication httpCommunication)
        {
            var query = HttpUtility.ParseQueryString("");

            query["email"] = details.Email;

            var response = await httpCommunication.Client.GetAsync($"api/users?{query}");

            if (!response.IsSuccessStatusCode)
            {
                if (response.StatusCode == HttpStatusCode.NotFound)
                {
                    return NotFound();
                }

                throw new Exception(response.StatusCode.ToString()); // TODO: Throw internal error.
            }

            var code = codeGenerator.Generate();

            await Repository.Create(details.Email, code);

            // TODO: Send email.
            Console.WriteLine(code);

            return Ok();
        }

        [HttpPost("login/verify")]
        public async Task<IActionResult> VerifyLogin(OtpVerifyLoginDetails details, [FromServices] ITokenGenerator tokenGenerator)
        {
            
            var codes = await Repository.GetCodesForEmail(details.Email);

            if (!codes.Contains(details.Code))
            {
                return BadRequest();
            }

            await Repository.Delete(details.Email, details.Code);

            var tokenClaims = new List<Claim>
            {
                new Claim("type", "user"),
                new Claim("email", details.Email)
            };

            var token = tokenGenerator.Generate(tokenClaims);

            return Ok(new {Token = token});
        }
    }
}
