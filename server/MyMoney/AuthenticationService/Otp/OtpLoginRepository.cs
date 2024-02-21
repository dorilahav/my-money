using DataAccess.Mongo;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
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
            var filter = Builders<OtpLoginModel>.Filter.And(
                Builders<OtpLoginModel>.Filter.Eq(x => x.Email, email),
                Builders<OtpLoginModel>.Filter.Eq(x => x.Code, code)
            );

            var projection = Builders<OtpLoginModel>.Projection.Include(x => x.Code);
            var options = new FindOptions<OtpLoginModel>()
            {
                Projection = Builders<OtpLoginModel>.Projection.Include(x => x.Code)
            };

            var cursor = await _collection.FindAsync(filter, options);

            return await cursor.FirstOrDefaultAsync();
        }

        public async Task Delete(string email, string code)
        {
            await _collection.DeleteOneAsync(x => x.Email == email && x.Code == code);
        }
    }
}
