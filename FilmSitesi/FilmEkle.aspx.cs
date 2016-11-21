using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class FilmEkle : System.Web.UI.Page
    {
        public string sonuc = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            //giriş yapmayanı anasayfaya gönderiyoruz
            if (Session["kadi"] == null)
                Response.Redirect("/");


            if (IsPostBack)
            {
                string klasor = Server.MapPath("/Content/filmler/");
                string dosyaadi = Request.Files["resim"].FileName;
                if (Request.Files["resim"] != null)
                    Request.Files["resim"].SaveAs(klasor + dosyaadi);

                Film f = new Film();
                f.FilmAdi = Request.Form["filmadi"];
                f.Ozet = Request.Form["ozet"];
                f.Yonetmen = Request.Form["yonetmen"];
                f.YoutubeURL = Request.Form["youtube"];
                f.Resim = dosyaadi;

                FilmContext ctx = new FilmContext();
                ctx.Filmler.Add(f);
                ctx.SaveChanges();
                sonuc = "Eklendi";
            }
        }
    }
}