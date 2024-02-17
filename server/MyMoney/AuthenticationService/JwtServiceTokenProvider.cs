using Authentication.Core;
using System.Collections.Generic;
using System.Security.Claims;

namespace AuthenticationService
{
    public class JwtServiceTokenProvider : IServiceTokenProvider
    {
        private string _serviceName;
        private ITokenValidator _tokenValidator;
        private ITokenGenerator _tokenGenerator;

        private string _token;

        public JwtServiceTokenProvider(string serviceName, ITokenValidator tokenValidator, ITokenGenerator tokenGenerator) {
            _serviceName = serviceName;
            _tokenValidator = tokenValidator;
            _tokenGenerator = tokenGenerator;
        }

        public string GetToken()
        {
            if (!_tokenValidator.IsValid(_token))
            {
                _token = _tokenGenerator.Generate(new List<Claim> {
                    new Claim("type", "service"),
                    new Claim("service", _serviceName)
                });
            }

            return _token;
        }
    }
}
