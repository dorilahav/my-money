using Authentication.DependencyInjection;
using Caching.Memcached;
using DataAccess.Mongo;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddJwtClientAuthentication();
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("ServiceOnly", policy => policy.RequireClaim("type", "service"));
    options.AddPolicy("UserOnly", policy => policy.RequireClaim("type", "user"));
});

builder.Services.AddMongoConnection("mongodb://localhost:27017/my-money-user-service");
builder.Services.AddMemcachedCache(options =>
{
    options.AddServer("localhost", 11211);
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();