"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[508],{508:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),c=t(757),s=t.n(c),o=t(791),i={movieContainer:"MovieInfo_movieContainer__nAjvL",movieImg:"MovieInfo_movieImg__jcUpO"},u=t(184),l=function(e){var n=e.movieDetails,t=n.title,r=n.release_date,a=n.vote_average,c=n.overview,s=n.poster_path,o=n.genres;return(0,u.jsxs)("div",{className:i.movieContainer,children:[(0,u.jsx)("img",{className:i.movieImg,src:"https://image.tmdb.org/t/p/w500".concat(s),alt:t}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("h2",{children:t}),(0,u.jsxs)("li",{children:["Release date: ",r]}),(0,u.jsxs)("li",{children:["Rating: ",a]}),(0,u.jsx)("li",{children:c}),(0,u.jsx)("li",{children:(0,u.jsxs)("p",{className:i.movieInformation,children:["Genres: ",o.map((function(e){return e.name})).join(", ")]})})]})]})},p=t(689),d=t(87),v=t(390),f={goBack:"styles_goBack__ExW4d","focus-visible":"styles_focus-visible__KWe4c",goBackContainer:"styles_goBackContainer__bdeL2"},m=t(639),h=function(){var e,n,t=(0,p.UO)().movieId,c=(0,o.useState)(null),i=(0,a.Z)(c,2),h=i[0],g=i[1],x=(0,p.TH)(),j=(0,o.useRef)(null!==(e=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,o.useEffect)((function(){if(t){var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Y5)(t);case 3:n=e.sent,g(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]),(0,u.jsxs)("div",{className:f.movieContainer,children:[(0,u.jsx)("div",{className:f.goBackContainer,children:(0,u.jsx)(d.rU,{className:f.goBack,to:j.current,children:"Go back"})}),h&&(0,u.jsx)(l,{movieDetails:h}),(0,u.jsxs)("div",{className:f.additionalDiv,children:[(0,u.jsx)("p",{className:f.additional,children:"Additional information"}),(0,u.jsxs)("ul",{className:f.additionalList,children:[(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"cast",state:{from:x},className:f.additionalItem,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(d.rU,{to:"reviews",className:f.additionalItem,children:"Revievs"})})]})]}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(m.a,{}),children:(0,u.jsx)(p.j3,{})})]})}},390:function(e,n,t){t.d(n,{B7:function(){return g},Tg:function(){return f},V0:function(){return h},WB:function(){return x},Y5:function(){return m}});var r=t(861),a=t(757),c=t.n(a),s=t(340),o="https://api.themoviedb.org/3",i="990f65d4b5c75dbe651b2313132afc99",u="/trending/movie/day",l="/movie/ ",p="/credits",d="/reviews",v="/search/movie",f=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o).concat(u,"?api_key=").concat(i,"&page=1&language=en-US&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log("Error",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTBmNjVkNGI1Yzc1ZGJlNjUxYjIzMTMxMzJhZmM5OSIsInN1YiI6IjY1YjA4NzVmYmU2ZDg4MDE5MjQzNzViNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oYBs3neVCVVjTulFOpmWbGvpn35zZ7H_MYXlypOOuoM")}},e.prev=1,e.next=4,s.Z.get("".concat(o,"/movie/").concat(n),t);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.log("Error during fetch:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o).concat(v,"?api_key=").concat(i,"&page=1&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),g=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o).concat(l).concat(n).concat(p,"?api_key=").concat(i,"&page=1&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(o).concat(l).concat(n).concat(d,"?api_key=").concat(i,"&page=1&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error:",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=508.5e4f96ea.chunk.js.map