using Microsoft.AspNetCore.Mvc.Filters;
using BINN.Controllers;

namespace BINN.Permisos
{

    public class ValidarsesionAttribute : ActionFilterAttribute

    {
        //sobre escribir un metodo predeterminado

        public override void OnActionExecuting(ActionExecutingContext context)
        {



            base.OnActionExecuting(context);
        }


    }
}
