using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Login
{
    public class OtpVerifyLoginDetails
    {
        [Required(ErrorMessage = "Missing email")]
        [EmailAddress(ErrorMessage = "Invalid email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Missing code")]
        [StringLength(6, MinimumLength = 6, ErrorMessage = "Invalid code")]
        public string Code { get; set; }
    }
}
