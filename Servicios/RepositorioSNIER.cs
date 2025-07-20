using Microsoft.Data.SqlClient;
using BINN.Models;
using Dapper;
using System.Data;
using NuGet.Protocol.Plugins;
using Microsoft.AspNetCore.Mvc;

namespace BINN.Servicios
{
    public interface IRepositorioSNIER
    {


    }



    public class RepositorioSNIER : IRepositorioSNIER
    {


        private readonly string connectionString;


        public RepositorioSNIER(IConfiguration configuration)
        {
            connectionString = configuration.GetConnectionString("DefaultConnection");

        }




    }




}

