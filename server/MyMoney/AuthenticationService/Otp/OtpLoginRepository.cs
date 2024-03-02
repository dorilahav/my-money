using DataAccess.Mongo;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace AuthenticationService.Login
{
    public class OtpLoginRepository
    {
        private IMongoCollection<OtpLoginModel> _collection;

        public OtpLoginRepository(MongoConnection connection)
        {
            _collection = connection.GetCollection<OtpLoginModel>("otp_logins");
        }

        public Task Create(string userId, string email, string code)
        {
            return _collection.InsertOneAsync(new OtpLoginModel { UserId = userId, Email = email, Code = code });
        }

        public async Task<OtpLoginModel> GetByEmailAndCode(string email, string code)
        {
            var cursor = _collection.Find(x => x.Email == email && x.Code == code);

            return await cursor.FirstOrDefaultAsync();
        }

        public async Task Delete(string email, string code)
        {
            await _collection.DeleteOneAsync(x => x.Email == email && x.Code == code);
        }
    }
}
