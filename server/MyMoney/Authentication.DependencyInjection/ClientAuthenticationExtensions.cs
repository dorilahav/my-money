using Authentication.Core;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Authentication.DependencyInjection
{
    public static class ClientAuthenticationExtensions
    {
        public static void AddJwtAuthentication(this IServiceCollection services)
        {
            services.AddOptions<JwtConfiguration>().BindConfiguration("Jwt").ValidateDataAnnotations();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureJwtBearerOptions>();
        }
    }
}
