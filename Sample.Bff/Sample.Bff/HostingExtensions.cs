using System.IdentityModel.Tokens.Jwt;
using Duende.Bff;
using Duende.Bff.Yarp;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Logging;

namespace Sample.Bff;

public static class HostingExtensions
{
    public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
    {
        var webClient = builder.Configuration.GetSection("WebClient").Get<WebClientOptions>()!;

        builder.Services
            .AddAuthorization()
            .AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

        builder.Services
            .AddBff()
            .AddRemoteApis();

        JwtSecurityTokenHandler.DefaultMapInboundClaims = false;
        builder.Services
            .AddAuthentication(options =>
            {
                options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = "oidc";
                options.DefaultSignOutScheme = "oidc";
            })
            .AddCookie(CookieAuthenticationDefaults.AuthenticationScheme, options => options.Cookie.SameSite = SameSiteMode.Strict)
            .AddOpenIdConnect("oidc", options =>
            {
                options.Authority = webClient.Authority;
                options.ClientId = webClient.ClientId;
                options.ClientSecret = webClient.Secret;
                options.ResponseType = "code";
                options.ResponseMode = "query";
                options.Scope.Add("Sample.Api");
                options.SaveTokens = true;
                options.GetClaimsFromUserInfoEndpoint = true;
            });

        return builder.Build();
    }

    public static WebApplication ConfigurePipeline(this WebApplication app)
    {
        var sampleApiUrl = app.Configuration["SampleApi"];

        if (app.Environment.IsEnvironment("Local"))
        {
            IdentityModelEventSource.ShowPII = true;
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseHsts();
        }

        app.UseDefaultFiles();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseAuthentication();
        app.UseBff();
        app.UseAuthorization();
        app.MapBffManagementEndpoints();
        app.MapRemoteBffApiEndpoint("/remote/values", $"{sampleApiUrl}/api/values")
            .RequireAccessToken(TokenType.User);
        app.MapFallbackToFile("index.html");
        app.MapPost("/log", ([FromBody] PostLogMessageRequest request, ILogger<Program> logger) =>
        {
            logger.Log(request.LogLevel, request.Message);
            return TypedResults.NoContent();
        });

        return app;
    }
}