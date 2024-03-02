using Caching.Core;
using DataAccess.Mongo;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace UserService.User
{
    public class UserRepository
    {
        private IMongoCollection<UserModel> _collection;
        private ICacheClient _cacheClient;

        public UserRepository(MongoConnection connection, ICacheClient cacheClient)
        {
            _collection = connection.GetCollection<UserModel>("users");
            _cacheClient = cacheClient;
        }

        public async Task<UserModel> GetUserByEmail(string email)
        {
            var cacheKey = $"users?email={email}";

            return await _cacheClient.GetOrCreate(cacheKey, async () =>
            {
                var cursor = _collection.Find(x => x.Email == email);

                return await cursor.FirstOrDefaultAsync();
            });
        }

        public async Task<UserModel> GetById(string id)
        {
            var cacheKey = $"users/{id}";

            return await _cacheClient.GetOrCreate(cacheKey, async () =>
            {
                var cursor = _collection.Find(x => x.Id == id);

                return await cursor.FirstOrDefaultAsync();
            });
        }
    }
}
