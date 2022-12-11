"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[589],{589:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var i,r=t(885),c=t(791),s=t(731),o=t(739),a=t(635),l=t(750),d=t(168),u=t(444).ZP.div(i||(i=(0,d.Z)(["\n  display: grid;\n  grid-gap: 15px;\n  position: relative;\n\n  a {\n    &:hover,\n    &:focus {\n      background-color: #d3d5ff40;\n    }\n  }\n\n  .backLink {\n    position: fixed;\n    z-index: 1;\n    top: 10px;\n    right: 10px;\n    font-size: 20px;\n    border: 2px solid #d3d5ff40;\n    border-radius: 10px;\n    padding: 10px;\n    text-align: end;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    background-color: rgba(26, 26, 26, 65%);\n    color: white;\n\n    &:hover,\n    &:focus {\n      background-color: rgba(103, 102, 105, 100%);\n    }\n  }\n\n  img {\n    max-width: 300px;\n  }\n\n  .movie-details {\n    display: flex;\n    justify-content: space-between;\n    gap: 15px;\n\n    h2 {\n      text-align: center;\n      font-size: 54px;\n    }\n  }\n\n  .details-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n\n    .overview {\n      font-style: italic;\n    }\n\n    .genres-title {\n      font-weight: 700;\n    }\n  }\n\n  .links {\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n\n    & a {\n      border-top: 2px solid rgba(103, 102, 105, 85%);\n      border-bottom: 2px solid rgba(103, 102, 105, 85%);\n      padding: 10px;\n      border-radius: 10px;\n\n      &.active {\n        background-color: rgba(72, 66, 84, 85%);\n        border: none;\n      }\n    }\n  }\n"]))),p=t(135),f=t(184),x=function(){var n,e,t,i=(0,c.useState)({}),d=(0,r.Z)(i,2),x=d[0],g=d[1],h=(0,o.UO)().movieId,v=(0,o.TH)();console.log("MOVIE",x),(0,c.useEffect)((function(){(0,a.Pg)(h).then((function(n){var e=n.data;g(e)}))}),[h]);var m=x.title,j=x.poster_path,b=x.genres,w=x.release_date,k=x.overview;return console.log("genres",b),(0,f.jsxs)(u,{children:[(0,f.jsxs)(s.rU,{to:null===(n=v.state)||void 0===n?void 0:n.from,className:"backLink",children:[(0,f.jsx)(p.x_l,{}),(0,f.jsx)("span",{children:"Back to previous"})]}),(0,f.jsxs)("div",{className:"movie-details",children:[(0,f.jsx)("img",{src:(0,l.B)(j),alt:m}),(0,f.jsxs)("div",{className:"details-wrapper",children:[(0,f.jsx)("h2",{children:m}),(0,f.jsx)("p",{className:"overview",children:k}),w?(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Release date:"})," ",w]}):null,null!==b&&void 0!==b&&b.length?(0,f.jsxs)("div",{children:[(0,f.jsx)("p",{className:"genres-title",children:"Genres"}),(0,f.jsx)("ul",{className:"genres",children:b.map((function(n){var e=n.id,t=n.name;return(0,f.jsx)("li",{className:"genre",children:(0,f.jsx)("p",{children:t})},e)}))})]}):null,(0,f.jsxs)("ul",{className:"links",children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.OL,{to:"cast",state:{from:null===(e=v.state)||void 0===e?void 0:e.from},className:"cast",children:"All cast & crew"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.OL,{to:"reviews",state:{from:null===(t=v.state)||void 0===t?void 0:t.from},className:"reviews",children:"User reviews"})})]})]})]}),(0,f.jsx)(c.Suspense,{children:(0,f.jsx)(o.j3,{})})]})}},635:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return l},Pg:function(){return o},Zh:function(){return d},tx:function(){return a}});var i=t(388),r="https://api.themoviedb.org/3/",c="api_key=2d54f3365ed9e7717bfee9cb79f47a9c",s=function(){return i.Z.get("".concat(r,"trending/movie/day?").concat(c))},o=function(n){return i.Z.get("".concat(r,"movie/").concat(n,"?").concat(c))},a=function(n){return i.Z.get("".concat(r,"movie/").concat(n,"/reviews?").concat(c))},l=function(n){return i.Z.get("".concat(r,"movie/").concat(n,"/credits?").concat(c))},d=function(n){return i.Z.get("".concat(r,"search/movie?").concat(c,"&query=").concat(n))}},750:function(n,e,t){t.d(e,{B:function(){return i}});function i(n){return n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://www.pngkit.com/png/detail/26-262771_question-mark-pics-question-mark-hand-drawn.png"}}}]);
//# sourceMappingURL=589.27bfe63a.chunk.js.map