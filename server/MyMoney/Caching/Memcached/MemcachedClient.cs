using Enyim.Caching;
using System;
using System.Threading.Tasks;

namespace Caching.Memcached
{
    internal class MemcachedClient : ICacheClient
    {
        private IMemcachedClient _client;
        private int _defaultCacheSeconds;

        internal MemcachedClient(MemcachedClientOptions options)
        {
            var configuration = options.MapToConfiguration();

            _client = new Enyim.Caching.MemcachedClient(options.LoggerFactory, configuration);
            _defaultCacheSeconds = options.DefaultCacheSeconds;
        }

        public Task<T> Get<T>(string key)
        {
            return _client.GetValueAsync<T>(key);
        }

        public Task Set<T>(string key, T value, int? cacheSeconds)
        {
            return _client.SetAsync(key, value, cacheSeconds ?? _defaultCacheSeconds);
        }

        public Task Remove<T>(string key)
        {
            return _client.RemoveAsync(key);
        }

        public Task Remove<T>(params string[] keys)
        {
            return _client.RemoveMultiAsync(keys);
        }

        public Task<T> GetOrCreate<T>(string key, Func<Task<T>> generator, int? cacheSeconds)
        {
            return _client.GetValueOrCreateAsync(key, cacheSeconds ?? _defaultCacheSeconds, generator);
        }

        public void Dispose()
        {
            _client.Dispose();
        }
    }
}
