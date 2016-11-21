using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Giris : System.Web.UI.Page
    {
        public string sonuc = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                //tırnak içindekiler input ların name lerinden geliyor
                string gelenkadi = Request.Form["kadi"];
                string gelensifre = Request.Form["sifre"];
                FilmContext ctx = new FilmContext();
                Kullanici k = (from x in ctx.Kullanicilar where x.KullaniciAdi == gelenkadi & x.Sifre == gelensifre select x).FirstOrDefault();

                if (k == null)
                {
                    //şartlara uyan kişi yok
                    sonuc = "Hatalı giriş. Bilgilerinizi kontrol ediniz.";
                }
                else
                {
                    //giriş yap
                    Session["kadi"] = k.KullaniciAdi;
                    var id = ctx.Kullanicilar.Where(x => x.KullaniciAdi == k.KullaniciAdi).FirstOrDefault().KullaniciID;
                    Session["KID"] = id;

                    var hatirla = Request.Form["hatirla"];
                    //secildiyse "on" gelir, diğer türlü "off" gelir
                    if (hatirla == "on") {
                        HttpCookie cerez = new HttpCookie("bizimcerez");
                        cerez.Value = k.KullaniciAdi + "---" + id;
                        cerez.Expires = DateTime.Today.AddDays(5);
                        //bu hatırlama 5 gün sonra biticek
                        Response.SetCookie(cerez);
                        //cerezi kullanıcıya gönderdik
                    } else
                    {
                        HttpCookie cerez = new HttpCookie("bizimcerez");
                        cerez.Expires = DateTime.Today.AddDays(-1);
                        Response.SetCookie(cerez);
                        //cookie silmek diye birşey yok. o yüzden silmek istedigimiz cerezin tarihi gecmis gibi yapıyoruz.
                    }

                    /*
                     Tüm sayfalardan kolayca erişebilmek istediğimiz bilgileri Session ile tutarız.
                     */
                    //3- anasayfaya yönlendir
                    Response.Redirect("/");
                }
            }
            
        }
    }
}