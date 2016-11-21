using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmSitesi.Models
{
    public class Film
    {
        [Key]
        public int FilmID { get; set; }
        public string FilmAdi { get; set; }
        public string Yonetmen { get; set; }
        public string Ozet { get; set; }
        public string YoutubeURL { get; set; }
        public string Resim { get; set; }
    }
}
