using System.Data;

namespace BINN.Models
{
    public class ConsultaNaturalViewModel
    {
        public string Pregunta { get; set; }
        public string ConsultaSQL { get; set; }
        public DataTable Resultados { get; set; }
    }
}

