using System.Collections.Generic;
using System.Security.Claims;

namespace Authentication.Core
{
    public interface ITokenGenerator
    {
        public string Generate(IEnumerable<Claim> claims);
    }
}
