﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FilmSitesi
{
    public partial class Cikis : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Session.Abandon(); // bütün sessionları yok eder
            Response.Redirect("/");
        }
    }
}