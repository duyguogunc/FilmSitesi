using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Profil : System.Web.UI.Page
    {
        public string email = "";
        public int kacGundur = 0;
        public int hit = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
            int girisYapanID = (int)Session["KID"];

            FilmContext ctx = new FilmContext();
            var k = ctx.Kullanicilar.Find(girisYapanID);
            email = k.Email;

            TimeSpan fark = DateTime.Today - k.Tarih;
            kacGundur = Convert.ToInt32(fark.TotalDays);

            //Kullanıcı tablosuna "hit" alanını ekleyelim.
            //update-database

            k.Hit += 1;
            ctx.Entry(k).State = System.Data.Entity.EntityState.Modified;
            ctx.SaveChanges();
  hit = k.Hit;
          
        }
    }
}