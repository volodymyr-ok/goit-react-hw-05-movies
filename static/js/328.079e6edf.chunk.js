"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[328],{328:function(n,t,c){c.r(t),c.d(t,{default:function(){return p}});var e,r=c(885),i=c(739),o=c(791),a=c(635),u=c(750),d=c(168),s=c(444).ZP.div(e||(e=(0,d.Z)(["\n  h3 {\n    text-align: center;\n    font-style: italic;\n    padding: 30px;\n    font-size: 36px;\n  }\n\n  ul {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 15px;\n    li {\n      display: flex;\n      flex-direction: column;\n      gap: 15px;\n      border-bottom: 1px solid #8a7aa6;\n      padding-bottom: 10px;\n    }\n\n    p {\n      b {\n        color: #8a7aa6;\n      }\n    }\n  }\n"]))),f=c(184),p=function(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),c=t[0],e=t[1],d=(0,i.UO)().movieId;return(0,o.useEffect)((function(){(0,a.M1)(d).then((function(n){var t=n.data;e(t.cast)}))}),[d]),(0,f.jsxs)(s,{children:[(0,f.jsx)("h3",{children:"CAST"}),(0,f.jsx)("ul",{children:c.map((function(n){var t=n.id,c=n.character,e=n.name,r=n.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:(0,u.B)(r),width:"200",alt:e}),(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Character:"})," ",c]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Actor:"})," ",e]})]},t)}))})]})}},635:function(n,t,c){c.d(t,{Df:function(){return o},M1:function(){return d},Pg:function(){return a},Zh:function(){return s},tx:function(){return u}});var e=c(388),r="https://api.themoviedb.org/3/",i="api_key=2d54f3365ed9e7717bfee9cb79f47a9c",o=function(){return e.Z.get("".concat(r,"trending/movie/day?").concat(i))},a=function(n){return e.Z.get("".concat(r,"movie/").concat(n,"?").concat(i))},u=function(n){return e.Z.get("".concat(r,"movie/").concat(n,"/reviews?").concat(i))},d=function(n){return e.Z.get("".concat(r,"movie/").concat(n,"/credits?").concat(i))},s=function(n){return e.Z.get("".concat(r,"search/movie?").concat(i,"&query=").concat(n))}},750:function(n,t,c){c.d(t,{B:function(){return e}});function e(n){return n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):"https://www.pngkit.com/png/detail/26-262771_question-mark-pics-question-mark-hand-drawn.png"}}}]);
//# sourceMappingURL=328.079e6edf.chunk.js.map