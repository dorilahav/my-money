using DataAccess;

namespace UserService.User
{
    public class UserModel : BaseModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
