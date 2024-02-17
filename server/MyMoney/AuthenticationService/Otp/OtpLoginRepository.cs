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

        public Task Create(string email, string code)
        {
            return _collection.InsertOneAsync(new OtpLoginModel { Email = email, Code = code });
        }

        public async Task<IList<string>> GetCodesForEmail(string email)
        {
            var filter = Builders<OtpLoginModel>.Filter.Eq(x => x.Email, email);
            var projection = Builders<OtpLoginModel>.Projection.Include(x => x.Code);
            var options = new FindOptions<OtpLoginModel, BsonDocument>()
            {
                Projection = Builders<OtpLoginModel>.Projection.Include(x => x.Code)
            };

            var cursor = await _collection.FindAsync(filter, options);
            var login = await cursor.ToListAsync();

            return login.Select(x => x["code"].AsString).ToList();
        }

        public async Task Delete(string email, string code)
        {
            await _collection.DeleteOneAsync(x => x.Email == email && x.Code == code);
        }
    }
}
