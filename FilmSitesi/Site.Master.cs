using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class SiteMaster : MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //giriş yapmış gözükmüyorsa ama cookie si varsa
            if (Session["kadi"] == null) {
                if (Request.Cookies["bizimcerez"] != null) {
                    //giriş yapsın ve sayfa yenilensin
                    var icerik = Request.Cookies["bizimcerez"].Value;
                    string[] alanlar = icerik.Split(new string[] { "---" },StringSplitOptions.None);
                    Session["kadi"] = alanlar[0];
                    Session["KID"] = Convert.ToInt32(alanlar[1]);
                }
            }
        }
    }
}