(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(22),s=a.n(i),o=(a(66),a(67),a(17)),u=a.n(o),l=a(42),d=a(24),j=(a(69),a(26));var h=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(c.useRef)(),s=Object(c.useState)([]),o=Object(d.a)(s,2),u=o[0],h=o[1];Object(c.useEffect)((function(){i.current.focus();var e=localStorage.getItem("RECENTSEARCHES");if(e){var t=JSON.parse(e);h(t)}}),[]),Object(c.useEffect)((function(){localStorage.setItem("RECENTSEARCHES",JSON.stringify(u))}),[u]);var p=function(){b(a),r(""),m()},b=function(e){var t="https://www.google.com/search?q=".concat(e);window.open(t)},m=function(){u.length>=6?(u.pop(),u.unshift(a),h(Object(l.a)(u))):h([a].concat(Object(l.a)(u)))};return Object(n.jsxs)("div",{className:"contentItem search",children:[Object(n.jsx)("img",{className:"googleIcon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png",alt:""}),Object(n.jsx)("input",{className:"searchValue",type:"text",value:a,onInput:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p()},ref:i}),Object(n.jsx)("button",{className:"searchButton",onClick:p,disabled:0===a.length,children:"Search"}),Object(n.jsxs)("div",{className:"wrapRecentSearches",children:[Object(n.jsxs)("div",{className:"recentSearchesTitle",children:[Object(n.jsx)("p",{children:"Recent searches"}),Object(n.jsx)("button",{className:"clearRecentSearches",onClick:function(e){h([])}})]}),Object(n.jsx)("ul",{className:"recentSearches",children:Object(n.jsx)(j.a,{children:u.map((function(e,t){return Object(n.jsx)(j.b.li,{inital:{opacity:0,y:-150},animate:{opacity:1,y:0},exit:{opacity:0,y:-150},transition:{duration:.8},className:"recentSearch",onClick:function(){return b(e)},children:e},t+1)}))})})]})]})},p=a(43),b=(a(71),a(35)),m=(a(72),a(40)),f=a(55),O=a(56),g=a(2);function x(){var e=Object(f.a)(["\n  margin: 25px;\n"]);return x=function(){return e},e}var v=Object(g.b)(x()),y=function(e){return Object(n.jsx)(O.CircleLoader,{css:v,color:"darkblue",size:100,style:{margin:"50px"}})},w=a(4);var S=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(!0),s=Object(d.a)(i,2),o=s[0],u=s[1],l=Object(c.useState)({value:"landscape",label:"Landscape"}),h=Object(d.a)(l,2),f=h[0],O=h[1];return Object(c.useEffect)((function(){fetch("https://api.pexels.com/v1/search?query=".concat(f.value,"&per_page=15&orientation=portrait"),{headers:{Authorization:"563492ad6f917000010000019638a7e317574370b239afeca6603408"}}).then((function(e){return e.json()})).then((function(e){var t=e.photos.map((function(e){return{value:e.src.large,url:e.url}}));r(t),u(!1)}))}),[f]),Object(n.jsxs)("div",{className:"contentItem images",children:[Object(n.jsx)("div",{className:"imageCarousel",children:o?Object(n.jsx)(y,{}):Object(n.jsx)(b.a,{naturalSlideWidth:400,naturalSlideHeight:500,totalSlides:15,visibleSlides:1,interval:1e4,isPlaying:!0,infinite:!0,children:Object(n.jsx)(b.c,{children:a.map((function(e,t){return Object(n.jsx)(b.b,{index:t,children:Object(n.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("div",{className:"slideImage",style:{backgroundImage:"url(".concat(e.value,")")}})})})}))})})}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"selectArea",children:Object(n.jsx)(m.a,{options:[{value:"landscape",label:"Landscape"},{value:"sunset sky",label:"Sunset Sky"},{value:"sunrise sky",label:"Sunrise sky"},{value:"mountains",label:"Mountains"}],value:f,classNamePrefix:"selectDropdownImages",isSearchable:!1,autoFocus:!1,onChange:function(e){O(e)},menuPlacement:"top",components:{Menu:function(e){return Object(n.jsx)(j.a,{children:Object(n.jsx)(j.b.div,{inital:{opacity:0,y:-50},animate:{opacity:1,y:-50},exit:{opacity:0,y:-150},transition:{duration:.7},children:Object(n.jsx)(w.e.Menu,Object(p.a)(Object(p.a)({},e),{},{children:e.children}))})})}}})})})]})};var N=function(e){return Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("input",{className:"inputTitle",type:"text",value:e.title,onChange:e.updateTitle})})},C=a(58);a(113);var D=function(e){return Object(n.jsx)("div",{className:"clockWrap",children:Object(n.jsx)(C.a,{className:"dashboardClock",value:e.time,size:130,renderMinuteMarks:!1,hourHandWidth:5,minuteHandWidth:3,minuteHandOppositeLength:30})})};var T=function(e){return Object(n.jsx)("div",{className:"dateElement",children:Object(n.jsx)("p",{className:"date",children:e.date})})};a(114);var I=function(e){return Object(n.jsxs)("div",{className:"dateTime",children:[Object(n.jsx)(T,{date:e.date}),Object(n.jsx)(D,{time:e.time})]})},k=a(28),L=a.n(k),E=u()({displayName:"DateTimeContainer",getInitialState:function(){return{date:L()().format("LL"),time:new Date}},componentDidMount:function(){var e=this;setInterval((function(){return e.tick()}),1e3)},tick:function(){this.setState({time:new Date})},render:function(){return Object(n.jsx)(I,{date:this.state.date,time:this.state.time})}});a(116);var M=function(e){return Object(n.jsxs)("div",{class:"navBar",children:[Object(n.jsx)(N,{title:e.title,updateTitle:e.updateTitle}),Object(n.jsx)(E,{})]})},R=u()({displayName:"NavBarContainer",getInitialState:function(){return{title:"Dashboard"}},componentDidMount:function(){var e=localStorage.getItem("TITLE");e&&this.setState({title:e})},componentDidUpdate:function(){localStorage.setItem("TITLE",this.state.title)},updateTitle:function(e){this.setState({title:e.target.value})},render:function(){return document.title=this.state.title,Object(n.jsx)(M,{title:this.state.title,updateTitle:this.updateTitle})}}),F=a(41),W=(a(117),a(18)),A=function(e){var t="weatherTooltip";return"Clouds"===e&&(t+=" weatherTooltip-Clouds"),"Clear"===e&&(t+=" weatherTooltip-Clear"),"Rain"===e&&(t+=" weatherTooltip-Rain"),"Snow"===e&&(t+=" weatherTooltip-Snow"),t};a(118);var B=function(e){return e.isLoading?Object(n.jsx)(y,{}):Object(n.jsxs)("div",{className:"contentItem weather",children:[Object(n.jsx)("p",{className:"currentDayTitle",children:"Today's weather"}),Object(n.jsx)("p",{className:"temperatureC",children:"".concat(e.currentDay.temp," C")}),Object(n.jsx)(F.a,{content:e.currentDay.weather,followCursor:!0,plugins:[W.c],className:A(e.currentDay.weather),children:Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(e.currentDay.icon,"@4x.png"),alt:e.currentDay.weather,className:"currentDayImage"})}),Object(n.jsx)("p",{className:"currentDaySunrise",children:"Sunrise ".concat(e.currentDay.sunrise)}),Object(n.jsx)("p",{children:"Sunset ".concat(e.currentDay.sunset)}),Object(n.jsx)("ul",{className:"weatherForecast",children:e.forecast.map((function(e){return Object(n.jsxs)("li",{className:"weatherForecastItem",children:[Object(n.jsx)("p",{children:e.day}),Object(n.jsx)("p",{children:"".concat(e.temperature," C")}),Object(n.jsx)(F.a,{content:e.weather,followCursor:!0,plugins:[W.c],className:A(e.weather),children:Object(n.jsx)("img",{className:"weatherForecastItemImage",src:"http://openweathermap.org/img/wn/".concat(e.icon,"@4x.png"),alt:e.weather})})]})}))})]})},H=a(57),_=a.n(H),P=function(e){return Math.round(Number(e)-273.15)},G=function(e){return new Date(1e3*e)},J=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],z=u()({displayName:"WeatherContainer",getInitialState:function(){return{forecast:[],isLoading:!0,currentDay:{temp:0,weather:"",sunrise:"",sunset:"",icon:""}}},componentDidMount:function(){var e=this;_.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat("51.135150","&lon=").concat("-0.018840","&appid=").concat("3d7ef965d57061670b60c97811df6490")).then((function(t){var a=P(t.data.current.temp),n=t.data.current.weather[0].main,c=G(t.data.current.sunrise),r=L()(c).format("LT"),i=G(t.data.current.sunset),s=L()(i).format("LT"),o=t.data.current.weather[0].icon,u=t.data.daily.map((function(e){var t=G(e.dt).getDay();return{day:J[t],temperature:P(e.temp.day),weather:e.weather[0].main,icon:e.weather[0].icon}}));delete u[0],e.setState({forecast:u,isLoading:!1,currentDay:{temp:a,weather:n,sunrise:r,sunset:s,icon:o}})})).catch((function(e){console.error(e)}))},componentDidUpdate:function(){var e=document.getElementById("favicon");switch(this.state.currentDay.weather){case"Clouds":e.href="blueclouds.png";break;case"Rain":e.href="rainyicon.png";break;case"Clear":e.href="sunclearicon.png";break;case"Snow":e.href="snow.png";break;default:e.href="leaficon.png"}},render:function(){return Object(n.jsx)(B,{forecast:this.state.forecast,currentDay:this.state.currentDay,isLoading:this.state.isLoading})}}),q=u()({displayName:"App",getInitialState:function(){return{}},render:function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(R,{}),Object(n.jsxs)("div",{className:"contentWrap",children:[Object(n.jsx)(S,{}),Object(n.jsx)(h,{}),Object(n.jsx)(z,{})]})]})}}),U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,141)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),U()},66:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){}},[[137,1,2]]]);
//# sourceMappingURL=main.4caaea4b.chunk.js.map