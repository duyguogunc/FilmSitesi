using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmSitesi.Models
{
    public class Kullanici
    {
        [Key]
        public int KullaniciID { get; set; }
        public string KullaniciAdi { get; set; }
        public string Sifre { get; set; }
        public string Email { get; set; }
        //[Column( Order =10)]
        public int Hit { get; set; }
        public DateTime Tarih { get; set; }
        //new Kullanici();
        public Kullanici() { //yapıcı - constructor method
            Tarih = DateTime.Now;
        }
    }
}
