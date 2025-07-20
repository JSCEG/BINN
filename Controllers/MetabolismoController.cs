using Microsoft.AspNetCore.Mvc;
using BINN.Models;
using BINN.Servicios;

namespace BINN.Controllers
{
    [ServiceFilter(typeof(ValidacionInputFiltro))]
    [AutorizacionFiltro]
    public class Metabolismo : Controller
    {
        public IActionResult TasadeConsumoMetabolico()
        {
            return View();
        }
    }
}