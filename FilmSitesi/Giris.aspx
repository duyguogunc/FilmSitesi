<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Giris.aspx.cs" Inherits="FilmSitesi.Giris" %>
<asp:Content ID="Giris" ContentPlaceHolderID="icerik" runat="server">
<div>
    <h1>Üye girişi</h1>
    <p><%=sonuc %></p>
    <div class="satir">
        <label>Kullanıcı Adı:</label>
        <input name="kadi" placeholder="Kullanıcı Adı"/>
    </div>
    <div class="satir">
        <label>Şifre:</label>
        <input type="password"  name="sifre" placeholder="Şifre"/>
    </div>
    <div class="satir">
        <label>Beni hatırla <input type="checkbox" name="hatirla" /></label>
    </div>
    <div class="satir">
        <input type="submit" value="GİRİŞ" />
    </div>
</div>

    </asp:Content>