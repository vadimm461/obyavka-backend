using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using WebApp.Models;
using WebApp.DTOs;
using System.Threading.Tasks;

namespace WebApp.Controllers;

[Route("api/account")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public AccountController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterDto model)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            await _signInManager.SignInAsync(user, isPersistent: false);
            return Ok();
        }

        return BadRequest(result.Errors);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto model)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, false, false);
        if (result.Succeeded)
            return Ok();

        return Unauthorized(new { message = "Неверный логин или пароль" });
    }
}