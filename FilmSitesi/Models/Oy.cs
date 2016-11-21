using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmSitesi.Models
{
   public class Oy
    {
        [Key]
        public int OyID { get; set; }
        public DateTime Tarih { get; set; }
        public int Puan { get; set; }

        [ForeignKey("OyVeren")]
        public int KullaniciID { get; set; }
        [ForeignKey("Film")]
        public int FilmID { get; set; }

        public virtual Kullanici OyVeren { get; set; }
        public virtual Film Film { get; set; }

        public Oy() {
            Tarih = DateTime.Now;
        }
    }
}
