using Microsoft.AspNetCore.Mvc;
using BINN.Servicios;
using System.Threading.Tasks;
using System.Data;

namespace BINN.Controllers
{
    [ServiceFilter(typeof(ValidacionInputFiltro))]
    [AutorizacionFiltro]


    public class EstacionesdeCarga : Controller
    {
        public IActionResult Electrolineras()
        {
            return View();
        }
    }

}
