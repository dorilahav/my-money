using System.ComponentModel.DataAnnotations;

namespace AuthenticationService.Login
{
    public class OtpLoginDetails
    {
        [Required(ErrorMessage = "Missing email")]
        [EmailAddress(ErrorMessage = "Invalid email")]
        public string Email { get; set; }
    }
}
