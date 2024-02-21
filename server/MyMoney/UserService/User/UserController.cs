using Caching.Core;
using Contracts.User;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace UserService.User
{
    [ApiController]
    [Route("/users")]
    public class UserController : Controller
    {
        private UserRepository Repository { get; }

        public UserController(MongoConnection mongoConnection, ICacheClient cacheClient) {
            Repository = new UserRepository(mongoConnection, cacheClient);
        }

        [HttpGet]
        [Authorize(Policy = "ServiceOnly")]
        public async Task<IActionResult> GetUserByEmail([FromQuery] string email)
        {
            var user = await Repository.GetUserByEmail(email);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(ConvertToResponse(user));
        }

        [HttpGet("me")]
        [Authorize(Policy = "UserOnly")]
        public async Task<IActionResult> GetMe()
        {
            var userId = User.FindFirst("id").Value;
            var user = await Repository.GetById(userId);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(ConvertToResponse(user));
        }

        private GetUserDetailsResponse ConvertToResponse(UserModel model)
        {
            return new GetUserDetailsResponse
            {
                Id = model.Id,
                Name = model.Name,
                Email = model.Email
            };
        }
    }
}
