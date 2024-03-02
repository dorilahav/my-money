using AuthenticationService.Utils;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Communication.Http;
using Authentication.DependencyInjection;

namespace AuthenticationService
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            services.AddMongoConnection("mongodb://localhost:27017/my-money-auth-service");

            services.AddJwtServiceAuthentication("AuthService");

            services.AddHttpClient<HttpCommunication>();

            ConfigureInternalServices(services);
        }

        private void ConfigureInternalServices(IServiceCollection services)
        {
            services.AddSingleton<ICodeGenerator, StaticCodeGenerator>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
