"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[589],{589:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var i,c=e(885),o=e(731),r=e(739),a=e(791),s=e(635),u=e(750),d=e(168),l=e(444).ZP.div(i||(i=(0,d.Z)(["\n  /* background-color: black; */\n  display: grid;\n  gap: 5px;\n  grid-template-columns: 25% 25% 50%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    display: inline-block;\n    border: 2px solid black;\n    border-radius: 5px;\n    width: 200px;\n    padding: 10px;\n    /* margin: 5px; */\n    text-align: center;\n  }\n\n  img {\n    /* position: absolute;\n    top: 5px;\n    right: 5px; */\n    max-width: 350px;\n  }\n\n  .main-details {\n    display: flex;\n  }\n"]))),f=e(184),p=function(){var n,t,e,i=(0,a.useState)({}),d=(0,c.Z)(i,2),p=d[0],m=d[1],v=(0,r.UO)().movieId,x=(0,r.TH)();console.log("MOVIE DETAILS",p),(0,a.useEffect)((function(){(0,s.Pg)(v).then((function(n){var t=n.data;m(t)}))}),[v]);var h=p.title,g=p.poster_path;return(0,f.jsxs)(l,{children:[(0,f.jsx)(o.rU,{to:null===(n=x.state)||void 0===n?void 0:n.from,children:"Back to previous"}),(0,f.jsxs)("div",{className:"main-details",children:[(0,f.jsx)("img",{src:(0,u.B)(g),alt:h}),(0,f.jsx)("h2",{children:h})]}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",state:{from:null===(t=x.state)||void 0===t?void 0:t.from},children:"cast"})}),(0,f.jsxs)("li",{children:[" ",(0,f.jsx)(o.rU,{to:"reviews",state:{from:null===(e=x.state)||void 0===e?void 0:e.from},children:"reviews"})]})]}),(0,f.jsx)(a.Suspense,{children:(0,f.jsx)(r.j3,{})})]})}},635:function(n,t,e){e.d(t,{Df:function(){return r},M1:function(){return u},Pg:function(){return a},Zh:function(){return d},tx:function(){return s}});var i=e(388),c="https://api.themoviedb.org/3/",o="api_key=2d54f3365ed9e7717bfee9cb79f47a9c",r=function(){return i.Z.get("".concat(c,"trending/movie/day?").concat(o))},a=function(n){return i.Z.get("".concat(c,"movie/").concat(n,"?").concat(o))},s=function(n){return i.Z.get("".concat(c,"movie/").concat(n,"/reviews?").concat(o))},u=function(n){return i.Z.get("".concat(c,"movie/").concat(n,"/credits?").concat(o))},d=function(n){return i.Z.get("".concat(c,"search/movie?").concat(o,"&query=").concat(n))}},750:function(n,t,e){e.d(t,{B:function(){return i}});function i(n){return n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"no img"}}}]);
//# sourceMappingURL=589.fe6c41d1.chunk.js.map