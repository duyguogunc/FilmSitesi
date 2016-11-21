<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Detay.aspx.cs" Inherits="FilmSitesi.Detay" %>

<asp:Content ID="Content1" ContentPlaceHolderID="icerik" runat="server">
    <!-- /Detay.aspx?ID=1 -->
    <h1><%=secilenFilm.FilmAdi %></h1>

    <h3>Fragmanı</h3>
    <%=secilenFilm.YoutubeURL %>

    <p><%=secilenFilm.Ozet %></p>
    <img src="/Content/filmler/<%=secilenFilm.Resim %>" />

    <h3>Verilen oylar</h3>
    <p>
        <%if (Session["kadi"] != null)
            { %>
        <span class="yildiz" puan="1"></span>
        <span class="yildiz" puan="2"></span>
        <span class="yildiz" puan="3"></span>
        <span class="yildiz" puan="4"></span>
        <span class="yildiz" puan="5"></span>
        <%} %>

        <%=oysayisi %> 
        <br />
        <%=toplampuan %>
    </p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $(".yildiz").click(function () {
                var p = $(this).attr("puan");

                $.ajax({
                    url: 'Oyislem.aspx',
                    method: 'GET', //Request.Querystring ile karşıladığımız için
                    data: { FilmID: <%=secilenFilm.FilmID%>, Puan: p, islem: 'oyver' },
                    success: function (gelenler) {
                        if(gelenler.length==0)
                            alert("Teşekkür ederiz.");
                        else 
                            alert(gelenler);
                    }
                });
            });
        });
    </script>
</asp:Content>
