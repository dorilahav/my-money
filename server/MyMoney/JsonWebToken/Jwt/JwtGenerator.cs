using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Text;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.Extensions.Options;

namespace Authentication.Core.Jwt
{
    public class JwtGenerator : ITokenGenerator
    {
        private JwtConfiguration _configuration;

        public JwtGenerator(IOptions<JwtConfiguration> configuration)
        {
            _configuration = configuration.Value;
        }

        public string Generate(IEnumerable<Claim> claims)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.Secret));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var securityToken = new JwtSecurityToken(
                _configuration.Issuer,
                _configuration.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(_configuration.Expiration),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(securityToken);
        }
    }
}
