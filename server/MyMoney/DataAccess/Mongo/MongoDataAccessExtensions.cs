using Microsoft.Extensions.DependencyInjection;

namespace DataAccess.Mongo
{
    public static class MongoDataAccessExtensions
    {
        public static void AddMongoConnection(this IServiceCollection services, string connectionString)
        {
            services.AddSingleton(x => new MongoConnection(connectionString));
        }
    }
}
