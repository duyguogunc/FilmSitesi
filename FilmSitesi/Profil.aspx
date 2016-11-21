<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Profil.aspx.cs" Inherits="FilmSitesi.Profil" %>
<asp:Content ID="Content1" ContentPlaceHolderID="icerik" runat="server">
    <h1>Profilim - <%=Session["kadi"] %></h1>
    <i><%=email %></i>
    <p><%=kacGundur %> gündür kayıtlı üye</p>
    <b>Bu profil <%=hit %> kere görüntülendi.</b>
</asp:Content>
