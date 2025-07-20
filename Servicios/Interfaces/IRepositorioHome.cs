using BINN.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BINN.Servicios.Interfaces
{
    public interface IRepositorioHome
    {
        Task<List<SeccionSNIER>> ObtenerSeccionesConModulos();
        Task<List<ModuloSNIER>> ObtenerModulosPorSeccion(int seccionId);
        Task<List<SeccionSNIER>> ObtenerSeccionesConModulosPorRol(string rolUsuario);
    }
}