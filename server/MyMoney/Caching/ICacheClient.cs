using System;
using System.Threading.Tasks;

namespace Caching
{
    public interface ICacheClient : IDisposable
    {
        public Task<T> Get<T>(string key);
        public Task Set<T>(string key, T value, int? cacheSeconds = null);
        public Task Remove<T>(string key);
        public Task Remove<T>(params string[] keys);
        public Task<T> GetOrCreate<T>(string key, Func<Task<T>> generator, int? cacheSeconds = null);
    }
}
