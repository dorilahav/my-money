using System.Collections.Generic;
using System.Security.Claims;

namespace Authentication.Core
{
    public class RefreshingServiceTokenResolver : IServiceTokenResolver
    {
        private string _serviceName;
        private ITokenValidator _tokenValidator;
        private ITokenGenerator _tokenGenerator;

        private string? _token;

        public RefreshingServiceTokenResolver(string serviceName, ITokenValidator tokenValidator, ITokenGenerator tokenGenerator)
        {
            _serviceName = serviceName;
            _tokenValidator = tokenValidator;
            _tokenGenerator = tokenGenerator;
        }

        public string Resolve()
        {
            if (_token is null || !_tokenValidator.IsValid(_token))
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
