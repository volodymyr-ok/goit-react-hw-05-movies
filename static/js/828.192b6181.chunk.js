"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[828],{828:function(t,n,e){e.r(n);var c=e(885),o=e(739),r=e(731),i=e(791),a=e(635),s=e(184);n.default=function(){var t,n,e,u=(0,i.useState)({}),f=(0,c.Z)(u,2),l=f[0],d=f[1],v=(0,o.UO)().movieId,h=(0,o.TH)();console.log("location",h),(0,i.useEffect)((function(){(0,a.Pg)(v).then((function(t){var n=t.data;d(n)}))}),[v]),console.log(l);var m=l.title;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:m}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r.rU,{to:"cast",state:{from:null===(t=h.state)||void 0===t?void 0:t.from},children:"cast"})}),(0,s.jsxs)("li",{children:[" ",(0,s.jsx)(r.rU,{to:"reviews",state:{from:null===(n=h.state)||void 0===n?void 0:n.from},children:"reviews"})]})]}),(0,s.jsx)(r.rU,{to:null===(e=h.state)||void 0===e?void 0:e.from,children:"Back to previous"}),(0,s.jsx)(i.Suspense,{children:(0,s.jsx)(o.j3,{})})]})}},635:function(t,n,e){e.d(n,{Df:function(){return i},M1:function(){return u},Pg:function(){return a},Zh:function(){return f},tx:function(){return s}});var c=e(388),o="https://api.themoviedb.org/3/",r="api_key=2d54f3365ed9e7717bfee9cb79f47a9c",i=function(){return c.Z.get("".concat(o,"trending/movie/day?").concat(r))},a=function(t){return c.Z.get("".concat(o,"movie/").concat(t,"?").concat(r))},s=function(t){return c.Z.get("".concat(o,"movie/").concat(t,"/reviews?").concat(r))},u=function(t){return c.Z.get("".concat(o,"movie/").concat(t,"/credits?").concat(r))},f=function(t){return c.Z.get("".concat(o,"search/movie?").concat(r,"&query=").concat(t))}}}]);
//# sourceMappingURL=828.192b6181.chunk.js.map