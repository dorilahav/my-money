namespace Authentication.Core
{
    public interface ITokenValidator
    {
        public bool IsValid(string token);
    }
}
