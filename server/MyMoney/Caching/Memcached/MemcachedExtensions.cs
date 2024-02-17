using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace Caching.Memcached
{
    public static class MemcachedExtensions
    {
        public static void AddMemcachedCache(this IServiceCollection services, Action<MemcachedClientOptions> configure)
        {
            services.AddSingleton<ICacheClient>(x =>
            {
                var loggerFactory = x.GetService<ILoggerFactory>();

                if (loggerFactory is null)
                {
                    throw new Exception("No LoggerFactory found"); // TODO: throw normal exception
                }

                var options = new MemcachedClientOptions(loggerFactory);

                configure.Invoke(options);

                return new MemcachedClient(options);
            });
        }
    }
}
