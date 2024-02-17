using DataAccess;

namespace AuthenticationService.Login
{
    public class OtpLoginModel : BaseModel
    {
        public string Email { get; set; }
        public string Code { get; set; }
    }
}
