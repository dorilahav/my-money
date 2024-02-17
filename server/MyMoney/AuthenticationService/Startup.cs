using AuthenticationService.Utils;
using DataAccess.Mongo;
using Authentication.Core;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AuthenticationService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddMongoConnection("mongodb://localhost:27017/my-money-auth-service");

            services.AddOptions<JwtConfiguration>().Bind(Configuration.GetSection("Jwt")).ValidateDataAnnotations();
            services.AddSingleton<ITokenGenerator, JwtGenerator>();
            services.AddSingleton<ITokenValidator, JwtValidator>();

            services.AddSingleton<IServiceTokenProvider>((svc) =>
            {
                var tokenGenerator = svc.GetService<ITokenGenerator>();
                var tokenValidator = svc.GetService<ITokenValidator>();

                return new JwtServiceTokenProvider("AuthService", tokenValidator, tokenGenerator);
            });

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