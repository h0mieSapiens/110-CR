using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CarRental.Models;

namespace CarRental.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            System.Console.WriteLine("el morro quiere washar el index");
            return View();
        }
        public IActionResult Hello()
        {
            System.Console.WriteLine("el morro quiere washar el PRIVACY");
            return View();
        }


        public IActionResult Privacy()
        {
            System.Console.WriteLine("el morro quiere washar el PRIVACY");
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
