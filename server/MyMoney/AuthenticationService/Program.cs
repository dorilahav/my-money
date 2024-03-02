using Authentication.DependencyInjection;
using AuthenticationService.Utils;
using Communication.Http;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddMongoConnection("mongodb://localhost:27017/my-money-auth-service");
builder.Services.AddJwtServiceAuthentication("AuthService");
builder.Services.AddHttpClient<HttpCommunication>();
builder.Services.AddSingleton<ICodeGenerator, StaticCodeGenerator>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();
app.MapControllers();
app.Run();