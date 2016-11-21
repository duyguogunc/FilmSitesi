<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="FilmEkle.aspx.cs" Inherits="FilmSitesi.FilmEkle" ValidateRequest="false" %>
<asp:Content ID="Content1" ContentPlaceHolderID="icerik" runat="server">
    <div>
        <h1>Film ekle</h1>
        <%=sonuc %>

        <!--<form enctype="multipart/formdata"> -->
        <div class="satir">
            <label>Resim:</label>
            <input name="resim" type="file" />
        </div>

        <div class="satir">
            <label>Film Adı:</label>
            <input name="filmadi" required/>
        </div>
        <div class="satir">
            <label>Yönetmen:</label>
            <input name="yonetmen" required/>
        </div>
        <div class="satir">
            <label>Özet:</label>
            <textarea name="ozet" required></textarea>
        </div>
        <div class="satir">
            <label>Youtube Embed Kodu:</label>
            <textarea name="youtube" required></textarea>
        </div>
        <div class="satir"><input type="submit" value="KAYDET" /></div>
    </div>
</asp:Content>
