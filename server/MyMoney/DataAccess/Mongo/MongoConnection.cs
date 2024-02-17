using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;
using MongoDB.Driver.Core.Configuration;

namespace DataAccess.Mongo
{
    public class MongoConnection
    {
        private MongoClient Client { get; }
        private IMongoDatabase Database { get; }

        public MongoConnection(string connectionString)
        {
            var databaseName = new ConnectionString(connectionString).DatabaseName;
            var settings = MongoClientSettings.FromConnectionString(connectionString);

            var pack = new ConventionPack
            {
                new CamelCaseElementNameConvention()
            };

            ConventionRegistry.Register("CamelCaseConvention", pack, t => true);

            Client = new MongoClient(settings);
            Database = Client.GetDatabase(databaseName);
        }

        public IMongoCollection<T> GetCollection<T>(string collectionName) where T : BaseModel
        {
            return Database.GetCollection<T>(collectionName);
        }
    }
}
