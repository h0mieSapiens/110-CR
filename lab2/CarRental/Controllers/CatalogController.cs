using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CarRental.Models;


namespace CarRental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext db {get; set;}
        public CatalogController(DataContext context){
            this.db =context;
        }
        public IActionResult Index()
        {
           
            return View();
        }

        public IActionResult Register()
    {
        return View();
    }
        [HttpGet]
        public IActionResult GetCatalog(){
            List<Car> cars = db.Cars.ToList();
            

            return Json(cars); 

        }
        [HttpPost]
        public IActionResult SaveCar([FromBody] Car carToRegister){
            db.Cars.Add(carToRegister);
            db.SaveChanges();
            System.Console.WriteLine("*********************");
            System.Console.WriteLine("*********************");
            Console.WriteLine("Saving Object",carToRegister);
            System.Console.WriteLine("*********************");
            System.Console.WriteLine("*********************");

            return Json(carToRegister);
        }
    }
}