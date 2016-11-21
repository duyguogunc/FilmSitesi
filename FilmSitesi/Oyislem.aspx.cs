using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Oyislem : System.Web.UI.Page
    {
        //1- ne işlem yapılacak? oy ver / verdiği oyu al
        //2- hangi film (filmid)
        //3- kim (Session["KID"])

        // Oyislem.aspx?FilmID=1&islem=oyver&puan=4

        public string mesaj = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            int FilmID = Convert.ToInt32(Request.QueryString["FilmID"]);
            string islem = Request.QueryString["islem"];
            int kim =(int) Session["KID"];

            int puan = Convert.ToInt32(Request.QueryString["puan"]);

            if (islem == "oyver") {
                //eğer üyelik şartı koymazsak
                //if(Session["Oyverildi"+FilmID]==null){
                //Session["Oyverildi"+FilmID]="evet";
                //.....

                //kullanıcı giriş yaptıysa
                if (Session["kadi"] != null)
                {
                    FilmContext ctx = new FilmContext();
                    //kullanıcı daha önce oy verdiyse
                    int verilenOylar = ctx.Oylar.Where(value => value.KullaniciID == kim & value.FilmID == FilmID).Count();
                    if (verilenOylar == 0)
                    {
                        //oy tablosuna 1 satır veri ekleyelim
                        Oy oy = new Oy();
                        oy.FilmID = FilmID;
                        oy.KullaniciID = kim;
                        oy.Puan = puan;
                        ctx.Oylar.Add(oy);
                        ctx.SaveChanges();
                    }
                    else mesaj += "daha önce oy vermişsiniz";
                }
                else mesaj += "giriş yapılmamış";
            }
        }
    }
}