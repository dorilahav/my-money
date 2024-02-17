using System.ComponentModel.DataAnnotations;

namespace Authentication.Core
{
    public class JwtConfiguration
    {
        private string _secret;

        [Required]
        public string Secret
        {
            get => _secret;
            set => _secret = value.PadRight(32);
        }

        [Required]
        public string Audience { get; set; }
        [Required]
        public string Issuer { get; set; }

        public int Expiration { get; set; }
    }
}
