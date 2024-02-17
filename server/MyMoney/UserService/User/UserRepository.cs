using Caching;
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
                var cursor = await _collection.FindAsync(x => x.Email == email);

                return await cursor.FirstOrDefaultAsync();
            });
        }
    }
}
