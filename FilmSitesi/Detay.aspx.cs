using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Detay : System.Web.UI.Page
    {
        public Film secilenFilm = new Film();
        public int oysayisi = 0;
        public double? toplampuan = 0;
        protected void Page_Load(object sender, EventArgs e)
        {
            // Detay.aspx?ID=1
            FilmContext ctx = new FilmContext();
            int gelenid = Convert.ToInt32(Request.QueryString["ID"]);

          

            oysayisi = ctx.Oylar.Where(x=>x.FilmID==gelenid).Count();
            //verilen oy varsa ortalaması alınsın
            if (oysayisi > 0)
            {
                toplampuan = ctx.Oylar.Where(x => x.FilmID == gelenid).Sum(x => x.Puan); //o filme verilen puanların toplamı

                toplampuan = toplampuan / oysayisi;
            }
            //1. ihtimal liste : .ToList()
            //2. ihtimal tek satır : .FirstOrDefault()
            /*
             Bir web sitesinde 2 tip içerik gösteririz.

            1- Liste şeklinde birden fazla içerik
            Örnekler: Slider, listeler, kategoriye bağlı şeyler
            
            veritabanından çekerken ==============
            ctx.TabloAdi.ToList();

            çektiğimiz veriyi gösterirken repeater kullanırız
            <asp:Repeater>
                <ItemTemplate>
                    <%#Eval("ModeldekiAlanınAdı")%>    
                </ItemTemplate>
            </asp:Repeater>


            2-Veritabanındaki tek bir satır:
            Örnekler: Detay sayfası, Kullanıcı profili, site ayarları

            Veritabanından çekerken ============================
            Film f =ctx.TabloAdi.Find(gelenid);

            Global ve public olarak tanımlanan değişkenler doldurulur.
            public string isim =  f.İsim;

            aspx sayfasında yazdırırken <%=isim%>
             */
            secilenFilm = ctx.Filmler.Where(x => x.FilmID == gelenid).FirstOrDefault();

        }
    }
}