using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Communication.Http
{
    public class HttpCommunication
    {
        public HttpClient Client { get; }

        public HttpCommunication(HttpClient httpClient, IServiceTokenProvider tokenProvider) {
            Client = httpClient;
            Client.BaseAddress = new Uri("http://localhost:5000");
            Client.DefaultRequestHeaders.Add("X-Internal-Request", "true");

            Client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", tokenProvider.GetToken());
        }
    }
}
