using FilmSitesi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            FilmContext ctx = new FilmContext();
            //son 6 film
            Repeater1.DataSource = ctx.Filmler.OrderBy(x=>x.FilmID).Take(6).ToList();
            Repeater1.DataBind();

            Repeater2.DataSource = ctx.Filmler.OrderBy(x => x.FilmID).Take(6).ToList();
            Repeater2.DataBind();
        }

        public string Kisalt(object ozet)
        {
            int u = 200;
            if (ozet.ToString().Length > u) //kısaltabiliriz
                return ozet.ToString().Substring(0, u);
            else
                return ozet.ToString();
        }
    }
}