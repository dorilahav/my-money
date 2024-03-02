using System;
using System.Linq;
using Authentication.Core;
using Authentication.Core.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace Authentication.DependencyInjection
{
    public static class AuthenticationExtensions
    {
        public static void AddJwtClientAuthentication(this IServiceCollection services)
        {
            services.AddJwtConfiguration();
            
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
            services.AddSingleton<IConfigureOptions<JwtBearerOptions>, ConfigureJwtBearerOptions>();
        }

        public static void AddJwtServiceAuthentication(this IServiceCollection services, string serviceName)
        {
            services.AddJwtConfiguration();
            
            services.AddSingleton<ITokenGenerator, JwtGenerator>();
            services.AddSingleton<ITokenValidator, JwtValidator>();

            services.AddServiceAuthentication(serviceName);
        }

        private static void AddJwtConfiguration(this IServiceCollection services)
        {
            if (services.Any(x => x.ServiceType == typeof(IConfigureOptions<JwtConfiguration>)))
            {
                return;
            }
            
            services.AddOptions<JwtConfiguration>().BindConfiguration("Jwt").ValidateDataAnnotations();
        }

        private static void AddServiceAuthentication(this IServiceCollection services, string serviceName)
        {
            services.AddSingleton<IServiceTokenResolver>(serviceProvider =>
            {
                var tokenGenerator = serviceProvider.GetService<ITokenGenerator>();
                var tokenValidator = serviceProvider.GetService<ITokenValidator>();

                return new RefreshingServiceTokenResolver(serviceName, tokenValidator, tokenGenerator);
            });
        }
    }
}
