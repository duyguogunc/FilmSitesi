<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FilmSitesi.Default" %>

<asp:Content runat="server" ID="Anasayfa" ContentPlaceHolderID="icerik">

    <article class="node">
        <div class="main_slider">
            <div id="slider_nav" class="flexslider">
                <ul class="slides">

                    <asp:Repeater ID="Repeater1" runat="server">
                        <ItemTemplate>
                            <li>
                                <h4><%#Eval("FilmAdi") %></h4>
                                <p>
                                    <%#Kisalt(Eval("Ozet")) %>
                                    <a href="/Detay.aspx?ID=<%#Eval("FilmID") %>" class="main_slider_arrow"></a>
                                </p>
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>


                </ul>
            </div>

            <div id="main_slider" class="wrap_me flexslider">
                <ul class="slides">
                    <asp:Repeater ID="Repeater2" runat="server">
                        <ItemTemplate>
                            <li>
                                <img alt="<%#Eval("FilmAdi") %>" src="/Content/filmler/<%#Eval("Resim") %>" width="634" height="380" />
                            </li>
                        </ItemTemplate>
                    </asp:Repeater>


                </ul>
            </div>
        </div>

        <div id="main_tabs">
            <div class="tabs">

                <ul>
                    <li>
                        <a href="#block_inTheaters">In Theaters</a>
                    </li>
                    <li>
                        <a href="#block_comingSoon">Coming Soon</a>
                    </li>
                    <li>
                        <a href="#block_newOnDVD">New on DVD</a>
                    </li>
                </ul>
                <!-- inTheaters block -->
                <aside id="block_inTheaters" class="content">
                    <div class="tabs_slide_nav"></div>
                    <div class="flexslider tabs_slider no-slide">
                        <ul class="slides">
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_01.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_02.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_03.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_04.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_04.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_01.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li class="last">
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_03.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                        </ul>
                    </div>
                </aside>
                <!-- end inTheaters block -->
                <!-- comingSoon block -->
                <aside id="block_comingSoon" class="content">
                    <div class="tabs_slide_nav"></div>
                    <div class="flexslider tabs_slider no-slide">
                        <ul class="slides">
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_01.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_02.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_03.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_01.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_02.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li class="last">
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_04.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                        </ul>
                    </div>
                </aside>
                <!-- end comingSoon block -->
                <!-- newOnDVD block -->
                <aside id="block_newOnDVD" class="content">
                    <div class="tabs_slide_nav"></div>
                    <div class="flexslider tabs_slider no-slide">
                        <ul class="slides">
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_01.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_02.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_03.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                            <li class="last">
                                <a href="#">
                                    <img src="/Content/images/content/main_tabs_04.jpg" class="wrap_me" alt="Photo" /></a>
                                <h4 class="title"><a href="#">Extremely Loud and Incredibly Close</a></h4>
                            </li>
                        </ul>
                    </div>
                </aside>
                <!-- end newOnDVD block -->
            </div>
        </div>
    </article>
    <article class="node">
        <div id="box_office" class="grid_3 alpha">
            <h4>Top Box Office</h4>
            <table>
                <tr class="first">
                    <td class="number">1.</td>
                    <td class="name"><a href="#">Contraband</a></td>
                    <td class="price">$24.3M</td>
                </tr>
                <tr>
                    <td class="number">2.</td>
                    <td class="name"><a href="#">Beauty and the Beast 3D</a></td>
                    <td class="price">$24.3M</td>
                </tr>
                <tr>
                    <td class="number">3.</td>
                    <td class="name"><a href="#">Mission: Impossible: Ghost Protocol</a></td>
                    <td class="price">$24.3M</td>
                </tr>
                <tr>
                    <td class="number">4.</td>
                    <td class="name"><a href="#">Joyful Noise</a></td>
                    <td class="price">$24.3M</td>
                </tr>
                <tr>
                    <td class="number">5.</td>
                    <td class="name"><a href="#">Beauty and the Beast 3D</a></td>
                    <td class="price">$24.3M</td>
                </tr>
                <tr class="last">
                    <td colspan="3"><a href="#" class="button button_small button_arrow">View all list</a></td>
                </tr>
            </table>
        </div>
        <div id="movie_reviews" class="grid_5 omega">
            <h2 class="title_page">Movie  Reviews<a href="#" class="button button_small button_arrow">More movie reviews</a></h2>
            <ul>
                <li class="review first">
                    <img class="wrap_me" alt="ReviewImg" src="/Content/images/content/review_01.jpg" />
                    <a href="#" class="title">Avatar</a>
                    <p>
                        <span class="by">By</span><a href="#" class="author">Alan Smith</a><a href="#" class="numbers">9 Comments</a>
                    </p>
                    <p>
                        Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi...
                    </p>
                    <p>
                        <span class="rate"><span class="active_rate" style="width: 60%;"></span></span><a class="full" href="#">Read full review</a>
                    </p>
                </li>
                <li class="review last">
                    <img class="wrap_me" alt="ReviewImg" src="/Content/images/content/review_02.jpg" />
                    <a href="#" class="title">Resident Evil Afterlife</a>
                    <p>
                        <span class="by">By</span><a href="#" class="author">Alan Smith</a><a href="#" class="numbers">2 Comments</a>
                    </p>
                    <p>
                        Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi...
                    </p>
                    <p>
                        <span class="rate"><span class="active_rate" style="width: 80%;"></span></span><a class="full" href="#">Read full review</a>
                    </p>
                </li>
            </ul>

        </div>

    </article>
    <article class="node">
        <div class="news grid_8 alpha omega">
            <h2 class="title_page">Movie  News</h2>
            <div class="news_item">
                <img class="wrap_me" width="90" height="90" src="/Content/images/content/main_news_01.jpg" alt="Image1">
                <a href="#" class="title">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</a>
                <ul class="details">
                    <li>By <a href="#">Alan Smith</a>
                    </li>
                    <li>
                        <time datetime="2012-07-18">Jul 18, 2012
                        </time>
                    </li>
                    <li>
                        <a href="#">3 Comments</a>
                    </li>
                </ul>
                <div class="details_text">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Mauris fermentum dictum magna. Sed laoreet aliquam leo...
								<a href="#">Read more</a>
                </div>
            </div>
            <div class="news_item">
                <img class="wrap_me" width="90" height="90" src="/Content/images/content/main_news_02.jpg" alt="Image1">
                <a href="#" class="title">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</a>
                <ul class="details">
                    <li>By <a href="#">Alan Smith</a>
                    </li>
                    <li>
                        <time datetime="2012-07-18">Jul 18, 2012
                        </time>
                    </li>
                    <li>
                        <a href="#">3 Comments</a>
                    </li>
                </ul>
                <div class="details_text">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Mauris fermentum dictum magna. Sed laoreet aliquam leo...
								<a href="#">Read more</a>
                </div>
            </div>
            <div class="news_item">
                <img class="wrap_me" width="90" height="90" src="/Content/images/content/main_news_03.jpg" alt="Image1">
                <a href="#" class="title">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</a>
                <ul class="details">
                    <li>By <a href="#">Alan Smith</a>
                    </li>
                    <li>
                        <time datetime="2012-07-18">Jul 18, 2012
                        </time>
                    </li>
                    <li>
                        <a href="#">3 Comments</a>
                    </li>
                </ul>
                <div class="details_text">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Mauris fermentum dictum magna. Sed laoreet aliquam leo...
								<a href="#">Read more</a>
                </div>
            </div>
            <div class="news_item">
                <img class="wrap_me" width="90" height="90" src="/Content/images/content/main_news_04.jpg" alt="Image1">
                <a href="#" class="title">Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet.</a>
                <ul class="details">
                    <li>By <a href="#">Alan Smith</a>
                    </li>
                    <li>
                        <time datetime="2012-07-18">Jul 18, 2012
                        </time>
                    </li>
                    <li>
                        <a href="#">3 Comments</a>
                    </li>
                </ul>
                <div class="details_text">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Mauris fermentum dictum magna. Sed laoreet aliquam leo...
								<a href="#">Read more</a>
                </div>
            </div>
            <a href="#" class="button button_small button_arrow">More movie news</a>
        </div>
    </article>
</asp:Content>
