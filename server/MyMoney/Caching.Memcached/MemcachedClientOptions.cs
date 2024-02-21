using Enyim.Caching.Configuration;
using Microsoft.Extensions.Logging;

namespace Caching.Memcached
{
    public class MemcachedClientOptions
    {
        public int DefaultCacheSeconds { get; set; }
        internal List<Server> Servers { get; set; }
        internal ILoggerFactory LoggerFactory { get; }

        internal MemcachedClientOptions(ILoggerFactory loggerFactory)
        {
            DefaultCacheSeconds = 3600;
            Servers = new List<Server>();
            LoggerFactory = loggerFactory;
        }

        public void AddServer(string hostname, int port)
        {
            Servers.Add(new Server
            {
                Address = hostname,
                Port = port
            });
        }

        internal MemcachedClientConfiguration MapToConfiguration()
        {
            var options = new Enyim.Caching.Configuration.MemcachedClientOptions
            {
                Servers = Servers
            };

            return new MemcachedClientConfiguration(LoggerFactory, options);
        }
    }
}
