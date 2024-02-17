using System;
using System.Net.Http;

namespace HttpCommunication
{
    public class HttpCommunication
    {
        public HttpClient Client { get; }

        public HttpCommunication(HttpClient httpClient) {
            Client = httpClient;
            Client.BaseAddress = new Uri("http://localhost:5000");
            Client.DefaultRequestHeaders.Add("X-Internal-Request", "true");
        }
    }
}
