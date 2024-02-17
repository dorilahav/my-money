using System;

namespace Authentication.Core
{
    internal class MissingConfigurationValueException : Exception
    {
        internal MissingConfigurationValueException(string key) : base($"Missing {key} in configuration")
        {

        }
    }
}
