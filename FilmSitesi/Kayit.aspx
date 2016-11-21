<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Kayit.aspx.cs" Inherits="FilmSitesi.Kayit" %>

<asp:Content ID="Kayit" ContentPlaceHolderID="icerik" runat="server"><div>
    <h1>Üye kayıt formu</h1>
    <p>
        <%=sonuc %>
    </p>
    <div class="satir">
        <label>Kullanıcı Adı:</label>
        <input name="kadi" placeholder="Kullanıcı Adı" required/>
    </div>
    <div class="satir">
        <label>Şifre:</label>
        <input type="password"  name="sifre" placeholder="Şifre" required/>
    </div>
    <div class="satir">
        <label>Şifre tekrar:</label>
        <input type="password"  name="sifretekrar" placeholder="Şifre Tekrar" required/>
    </div>
    <div class="satir">
        <label>Email:</label>
        <input type="email"  name="email" placeholder="Email"/>
    </div>
    <div class="satir">
        <input type="submit" value="GİRİŞ" />
    </div>
</div>
    </asp:Content>
