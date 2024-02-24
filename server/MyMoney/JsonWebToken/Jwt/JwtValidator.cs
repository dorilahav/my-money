using System;
using System.IdentityModel.Tokens.Jwt;

namespace Authentication.Core.Jwt
{
    public class JwtValidator : ITokenValidator
    {
        private TimeSpan _validityMargin;

        public JwtValidator(TimeSpan? validityMargin = null)
        {
            _validityMargin = validityMargin ?? TimeSpan.FromSeconds(30);
        }

        public bool IsValid(string token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return false;
            }

            return new JwtSecurityToken(token).ValidTo.Add(_validityMargin) < DateTime.Now;
        }
    }
}
