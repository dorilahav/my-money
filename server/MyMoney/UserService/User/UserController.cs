using Caching;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace UserService.User
{
    [Authorize(Policy = "ServiceOnly")]
    [ApiController]
    [Route("/users")]
    public class UserController : Controller
    {
        private UserRepository Repository { get; }

        public UserController(MongoConnection mongoConnection, ICacheClient cacheClient) {
            Repository = new UserRepository(mongoConnection, cacheClient);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserByEmail([FromQuery] string email)
        {
            var user = await Repository.GetUserByEmail(email);

            if (user is null)
            {
                return NotFound();
            }

            return Ok(user);
        }
    }
}
