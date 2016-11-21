/*
copyright (c) 2008 Wouter van der Graaf, all rights reserved

css3-mediaqueries.js - CSS Helper and CSS3 Media Queries Enabler

author: Wouter van der Graaf <woutervandergraaf at gmail com>
version: 0.9 (20091001)
license: MIT
website: http://woutervandergraaf.nl/css3-mediaqueries-js/

W3C spec: http://www.w3.org/TR/css3-mediaqueries/

Note: use of embedded <style> is not recommended when using media queries, because IE  has no way of returning the raw literal css text from a <style> element.
*/
"function"!==typeof Object.create&&(Object.create=function(i){function l(){}l.prototype=i;return new l});var ua={toString:function(){return navigator.userAgent},test:function(i){return this.toString().toLowerCase().indexOf(i.toLowerCase())>-1}};ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];ua.webkit=ua.test("webkit");ua.gecko=ua.test("gecko")&&!ua.webkit;ua.opera=ua.test("opera");ua.ie=ua.test("msie")&&!ua.opera;
ua.ie6=ua.ie&&document.compatMode&&"undefined"===typeof document.documentElement.style.maxHeight;ua.ie7=ua.ie&&document.documentElement&&"undefined"!==typeof document.documentElement.style.maxHeight&&"undefined"===typeof XDomainRequest;ua.ie8=ua.ie&&"undefined"!==typeof XDomainRequest;
var domReady=function(){var i=[],l=function(){if(!arguments.callee.done){arguments.callee.done=true;for(var l=0;l<i.length;l++)i[l]()}};document.addEventListener&&document.addEventListener("DOMContentLoaded",l,false);if(ua.ie){(function(){try{document.documentElement.doScroll("left")}catch(i){setTimeout(arguments.callee,50);return}l()})();document.onreadystatechange=function(){if(document.readyState==="complete"){document.onreadystatechange=null;l()}}}ua.webkit&&document.readyState&&function(){document.readyState!==
"loading"?l():setTimeout(arguments.callee,10)}();window.onload=l;return function(n){typeof n==="function"&&(l.done?n():i[i.length]=n);return n}}(),cssHelper=function(){var i=/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,l=/[^\s{][^{]*\{[^{}]*\}/g,n=/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,y=/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,z=/\s*(,|:|;|\{|\})\s*/g,q=/\s{2,}/g,t=/;\}/g,u=/\S+/g,o,v=false,r=[],w=function(f){typeof f==="function"&&(r[r.length]=f)},m={},s=function(f,a){if(m[f]){var e=
m[f].listeners;if(e)for(var d=0;d<e.length;d++)e[d](a)}},p=function(f,a,e){if(ua.ie&&!window.XMLHttpRequest)window.XMLHttpRequest=function(){return new ActiveXObject("Microsoft.XMLHTTP")};if(!XMLHttpRequest)return"";var d=new XMLHttpRequest;try{d.open("get",f,true);d.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest")}catch(b){e();return}var g=false;setTimeout(function(){g=true},5E3);document.documentElement.style.cursor="progress";d.onreadystatechange=function(){if(d.readyState===4&&!g){!d.status&&
location.protocol==="file:"||d.status>=200&&d.status<300||d.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof d.status==="undefined"?a(d.responseText):e();document.documentElement.style.cursor="";d=null}};d.send("")},g=function(f){f=f.replace(y,"");f=f.replace(z,"$1");f=f.replace(q," ");return f=f.replace(t,"}")},h={mediaQueryList:function(f){for(var a={},e=f.indexOf("{"),d=f.substring(0,e),f=f.substring(e+1,f.length-1),b=[],g=[],c=d.toLowerCase().substring(7).split(","),e=0;e<c.length;e++)b[b.length]=
h.mediaQuery(c[e],a);c=f.match(l);if(c!==null)for(e=0;e<c.length;e++)g[g.length]=h.rule(c[e],a);a.getMediaQueries=function(){return b};a.getRules=function(){return g};a.getListText=function(){return d};a.getCssText=function(){return f};return a},mediaQuery:function(f,a){for(var e=false,d,b=[],g=(f||"").match(u),h=0;h<g.length;h++){var c=g[h];if(!d&&(c==="not"||c==="only"))c==="not"&&(e=true);else if(d){if(c.charAt(0)==="("){c=c.substring(1,c.length-1).split(":");b[b.length]={mediaFeature:c[0],value:c[1]||
null}}}else d=c}return{getList:function(){return a||null},getValid:function(){return true},getNot:function(){return e},getMediaType:function(){return d},getExpressions:function(){return b}}},rule:function(f,a){for(var e={},d=f.indexOf("{"),b=f.substring(0,d),g=b.split(","),c=[],d=f.substring(d+1,f.length-1).split(";"),j=0;j<d.length;j++)c[c.length]=h.declaration(d[j],e);e.getMediaQueryList=function(){return a||null};e.getSelectors=function(){return g};e.getSelectorText=function(){return b};e.getDeclarations=
function(){return c};e.getPropertyValue=function(f){for(var a=0;a<c.length;a++)if(c[a].getProperty()===f)return c[a].getValue();return null};return e},declaration:function(f,a){var e=f.indexOf(":"),d=f.substring(0,e),b=f.substring(e+1);return{getRule:function(){return a||null},getProperty:function(){return d},getValue:function(){return b}}}},a=function(f){if(typeof f.cssHelperText==="string"){var a={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}},e=a.mediaQueryLists,d=a.rules,
b=f.cssHelperText.match(i);if(b!==null)for(var c=0;c<b.length;c++)if(b[c].substring(0,7)==="@media "){e[e.length]=h.mediaQueryList(b[c]);d=a.rules=d.concat(e[e.length-1].getRules())}else d[d.length]=h.rule(b[c]);e=a.selectors;for(c=0;c<d.length;c++)for(var b=d[c],g=b.getSelectors(),j=0;j<g.length;j++){var k=g[j];e[k]||(e[k]=[]);e[k][e[k].length]=b}e=a.declarations;for(c=0;c<d.length;c++)e=a.declarations=e.concat(d[c].getDeclarations());d=a.properties;for(c=0;c<e.length;c++){b=e[c].getProperty();d[b]||
(d[b]=[]);d[b][d[b].length]=e[c]}f.cssHelperParsed=a;o[o.length]=f;return a}},c=function(f,b){f.cssHelperText=g(b||f.innerHTML);return a(f)},k=function(){v=true;o=[];for(var f=[],b=function(){for(var b=0;b<f.length;b++)a(f[b]);for(var e=document.getElementsByTagName("style"),b=0;b<e.length;b++)c(e[b]);v=false;for(b=0;b<r.length;b++)r[b](o)},e=document.getElementsByTagName("link"),d=0;d<e.length;d++){var h=e[d];h.getAttribute("rel").indexOf("style")>-1&&(h.href&&h.href.length!==0&&!h.disabled)&&(f[f.length]=
h)}if(f.length>0)for(var j=0,k=function(){j++;j===f.length&&b()},e=function(a){var f=a.href;p(f,function(b){b=g(b).replace(n,"url("+f.substring(0,f.lastIndexOf("/"))+"/$1)");a.cssHelperText=b;k()},k)},d=0;d<f.length;d++)e(f[d]);else b()},j={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"},b={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null},A=function(a,c){if(b[a]!==null){if(j[a]==="array")return b[a]=b[a].concat(c);
var e=b[a],d;for(d in c)c.hasOwnProperty(d)&&(e[d]=e[d]?e[d].concat(c[d]):c[d]);return e}},x=function(a){b[a]=j[a]==="array"?[]:{};for(var c=0;c<o.length;c++)A(a,o[c].cssHelperParsed[a]);return b[a]};domReady(function(){for(var a=document.body.getElementsByTagName("*"),b=0;b<a.length;b++)a[b].checkedByCssHelper=true;document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent?document.body.addEventListener("DOMNodeInserted",function(a){a=a.target;if(a.nodeType===1){s("DOMElementInserted",
a);a.checkedByCssHelper=true}},false):setInterval(function(){for(var a=document.body.getElementsByTagName("*"),b=0;b<a.length;b++)if(!a[b].checkedByCssHelper){s("DOMElementInserted",a[b]);a[b].checkedByCssHelper=true}},1E3)});var B=function(a){if(typeof window.innerWidth!="undefined")return window["inner"+a];if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0)return document.documentElement["client"+a]};
return{addStyle:function(a,b){var e=document.createElement("style");e.setAttribute("type","text/css");document.getElementsByTagName("head")[0].appendChild(e);if(e.styleSheet)try{e.styleSheet.cssText=a}catch(d){}else e.appendChild(document.createTextNode(a));e.addedWithCssHelper=true;typeof b==="undefined"||b===true?cssHelper.parsed(function(){var b=c(e,a),d;for(d in b)b.hasOwnProperty(d)&&A(d,b[d]);s("newStyleParsed",e)}):e.parsingDisallowed=true;return e},removeStyle:function(a){return a.parentNode.removeChild(a)},
parsed:function(a){if(v)w(a);else if(typeof o!=="undefined")typeof a==="function"&&a(o);else{w(a);k()}},mediaQueryLists:function(a){cssHelper.parsed(function(){a(b.mediaQueryLists||x("mediaQueryLists"))})},rules:function(a){cssHelper.parsed(function(){a(b.rules||x("rules"))})},selectors:function(a){cssHelper.parsed(function(){a(b.selectors||x("selectors"))})},declarations:function(a){cssHelper.parsed(function(){a(b.declarations||x("declarations"))})},properties:function(a){cssHelper.parsed(function(){a(b.properties||
x("properties"))})},broadcast:s,addListener:function(a,b){if(typeof b==="function"){m[a]||(m[a]={listeners:[]});m[a].listeners[m[a].listeners.length]=b}},removeListener:function(a,b){if(typeof b==="function"&&m[a])for(var c=m[a].listeners,d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);d=d-1}},getViewportWidth:function(){return B("Width")},getViewportHeight:function(){return B("Height")}}}();
domReady(function(){var i,l=/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,n=/[0-9]+(dpi|dpcm)$/,y=/^[0-9]+\/[0-9]+$/,z=/^[0-9]*(\.[0-9]+)*$/,q=[],t=function(){var g=document.createElement("div");g.id="css3-mediaqueries-test";var h=cssHelper.addStyle("@media all and (width) { #css3-mediaqueries-test { width: 1px !important; } }",false);document.body.appendChild(g);var a=g.offsetWidth===1;h.parentNode.removeChild(h);g.parentNode.removeChild(g);t=function(){return a};return a},u=function(g){i.style.width=g;g=i.offsetWidth;
i.style.width="";return g},o=function(g,h){var a=g.length,c=g.substring(0,4)==="min-",k=!c&&g.substring(0,4)==="max-";if(h!==null){var j,b;if(l.exec(h)){j="length";b=u(h)}else if(n.exec(h)){j="resolution";b=parseInt(h,10);var i=h.substring((b+"").length)}else if(y.exec(h)){j="aspect-ratio";b=h.split("/")}else if(z){j="absolute";b=h}else j="unknown"}if("device-width"===g.substring(a-12,a)){a=screen.width;return h!==null?j==="length"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false:a>0}if("device-height"===g.substring(a-
13,a)){i=screen.height;return h!==null?j==="length"?c&&i>=b||k&&i<b||!c&&!k&&i===b:false:i>0}if("width"===g.substring(a-5,a)){a=document.documentElement.clientWidth||document.body.clientWidth;return h!==null?j==="length"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false:a>0}if("height"===g.substring(a-6,a)){i=document.documentElement.clientHeight||document.body.clientHeight;return h!==null?j==="length"?c&&i>=b||k&&i<b||!c&&!k&&i===b:false:i>0}if("orientation"===g.substring(a-11,a)){a=document.documentElement.clientWidth||
document.body.clientWidth;i=document.documentElement.clientHeight||document.body.clientHeight;return j==="absolute"?b==="portrait"?a<=i:a>i:false}if("aspect-ratio"===g.substring(a-12,a)){a=document.documentElement.clientWidth||document.body.clientWidth;i=document.documentElement.clientHeight||document.body.clientHeight;a=a/i;b=b[1]/b[0];return j==="aspect-ratio"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false}if("device-aspect-ratio"===g.substring(a-19,a))return j==="aspect-ratio"&&screen.width*b[1]===screen.height*
b[0];if("color-index"===g.substring(a-11,a)){a=Math.pow(2,screen.colorDepth);return h!==null?j==="absolute"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false:a>0}if("color"===g.substring(a-5,a)){a=screen.colorDepth;return h!==null?j==="absolute"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false:a>0}if("resolution"===g.substring(a-10,a)){a=i==="dpcm"?u("1cm"):u("1in");return h!==null?j==="resolution"?c&&a>=b||k&&a<b||!c&&!k&&a===b:false:a>0}return false},v=function(g){for(var h=g.getMediaQueries(),a={},c=0;c<h.length;c++){var i;
var j=h[c];i=j.getValid();var b=j.getExpressions(),l=b.length;if(l>0){for(var m=0;m<l&&i;m++)i=o(b[m].mediaFeature,b[m].value);j=j.getNot();i=i&&!j||j&&!i}else i=void 0;i&&(a[h[c].getMediaType()]=true)}var h=[],c=0,n;for(n in a)if(a.hasOwnProperty(n)){c>0&&(h[c++]=",");h[c++]=n}h.length>0&&(q[q.length]=cssHelper.addStyle("@media "+h.join("")+"{"+g.getCssText()+"}",false))},r=function(g){for(var h=0;h<g.length;h++)v(g[h]);if(ua.ie){document.documentElement.style.display="block";setTimeout(function(){document.documentElement.style.display=
""},0);setTimeout(function(){cssHelper.broadcast("cssMediaQueriesTested")},100)}else cssHelper.broadcast("cssMediaQueriesTested")},w=function(){for(var g=0;g<q.length;g++)cssHelper.removeStyle(q[g]);q=[];cssHelper.mediaQueryLists(r)},m=0,s=function(){var g=cssHelper.getViewportWidth(),h=cssHelper.getViewportHeight();if(ua.ie){var a=document.createElement("div");a.style.width="100px";a.style.height="100px";a.style.position="absolute";a.style.top="-9999em";a.style.overflow="scroll";document.body.appendChild(a);
m=a.offsetWidth-a.clientWidth;document.body.removeChild(a)}var c,i=function(){var a=cssHelper.getViewportWidth(),b=cssHelper.getViewportHeight();if(Math.abs(a-g)>m||Math.abs(b-h)>m){g=a;h=b;clearTimeout(c);c=setTimeout(function(){t()?cssHelper.broadcast("cssMediaQueriesTested"):w()},500)}};window.onresize=function(){var a=window.onresize||function(){};return function(){a();i()}}()},p=document.documentElement;p.style.marginLeft="-32767px";setTimeout(function(){p.style.marginTop=""},2E4);return function(){if(t())p.style.marginLeft=
"";else{cssHelper.addListener("newStyleParsed",function(g){r(g.cssHelperParsed.mediaQueryLists)});cssHelper.addListener("cssMediaQueriesTested",function(){if(ua.ie)p.style.width="1px";setTimeout(function(){p.style.width="";p.style.marginLeft=""},0);cssHelper.removeListener("cssMediaQueriesTested",arguments.callee)});i=document.createElement("div");i.style.cssText="position:absolute;top:-9999em;left:-9999em;margin:0;border:none;padding:0;width:1em;font-size:1em;";document.body.appendChild(i);if(i.offsetWidth!==
16)i.style.fontSize=16/i.offsetWidth+"em";i.style.width="";w()}s()}}());try{document.execCommand("BackgroundImageCache",!1,!0)}catch(e$$12){};