using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmSitesi.Models
{
   public class FilmContext : DbContext
    {
        public virtual DbSet<Film> Filmler { get; set; }
        public virtual DbSet<Kullanici> Kullanicilar { get; set; }
        public virtual DbSet<Oy> Oylar { get; set; }
    }
}
