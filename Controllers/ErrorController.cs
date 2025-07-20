using Microsoft.AspNetCore.Mvc;
using BINN.Servicios;
using System.Threading.Tasks;
using System.Data;

namespace BINN.Controllers
{
    [ServiceFilter(typeof(ValidacionInputFiltro))]
    [AutorizacionFiltro]


    public class ErrorController : Controller
    {
        public IActionResult AccesoDenegado()
        {
            return View();
        }
        public IActionResult ActividadSospechosa()
        {
            return View();
        }
    }

}
