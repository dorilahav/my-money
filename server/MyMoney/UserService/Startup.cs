using DataAccess.Mongo;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Caching.Memcached;
using Authentication.DependencyInjection;
using Authentication.Core;

namespace UserService
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

            services.AddOptions();

            services.AddOptions<JwtConfiguration>().BindConfiguration("Jwt").ValidateDataAnnotations();

            services.AddJwtAuthentication();
            services.AddAuthorization(options =>
            {
                options.AddPolicy("ServiceOnly", policy => policy.RequireClaim("type", "service"));
            });

            services.AddMongoConnection("mongodb://localhost:27017/my-money-user-service");
            services.AddMemcachedCache(options =>
            {
                options.AddServer("localhost", 11211);
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
