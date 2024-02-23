using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Communication.Http
{
    public class HttpCommunication
    {
        public HttpClient Client { get; }

        public HttpCommunication(HttpClient httpClient, IAuthorizationTokenResolver tokenResolver)
        {
            Client = httpClient;
            Client.BaseAddress = new Uri("http://localhost:5000");
            Client.DefaultRequestHeaders.Add("X-Internal-Request", "true");

            var cookieContainer = new CookieContainer();

            cookieContainer.Add(Client.BaseAddress, new Cookie("AuthToken", tokenResolver.Resolve()));

            Client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", tokenResolver.Resolve());
        }
    }
}
