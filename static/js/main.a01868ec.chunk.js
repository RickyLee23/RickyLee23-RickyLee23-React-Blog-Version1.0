(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{58:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),o=e(25),a=e.n(o),u=e(4),s=e(2),b=e(3),j=e(12),d=e(5),x="token",l=function(n){localStorage.setItem(x,n)},f=function(){return localStorage.getItem(x)},p="https://student-json-api.lidemy.me",h=function(n,t){var e=n*t-t,r=n*t;return fetch("".concat(p,"/posts?_sort=createdAt&_order=desc&_start=").concat(e,"&_end=").concat(r))},O=function(){var n=f();return fetch("".concat(p,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))};function g(){var n=Object(s.a)(["\n  border: 0;\n  background: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  outline: none;\n  :active {\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(s.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return v=function(){return n},n}function m(){var n=Object(s.a)(["\n  margin-bottom: 10px;\n"]);return m=function(){return n},n}function w(){var n=Object(s.a)(["\n  text-align: center;\n  margin: 100px;\n"]);return w=function(){return n},n}function k(){var n=Object(s.a)(["\n  color: red;\n"]);return k=function(){return n},n}var y=b.a.div(k()),S=b.a.div(w()),C=b.a.div(m()),z=b.a.input(v()),P=b.a.button(g());function T(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),s=a[0],b=a[1],j=Object(c.useState)(""),x=Object(u.a)(j,2),l=x[0],f=x[1],h=Object(c.useState)(),O=Object(u.a)(h,2),g=O[0],v=O[1],m=Object(d.f)();return Object(r.jsx)(S,{children:Object(r.jsxs)("form",{onSubmit:function(){v(null),function(n,t,e){return fetch("".concat(p,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(e,s,l).then((function(n){0===n.ok?v(n.message):1===n.ok&&m.push("/login")}))},children:[Object(r.jsxs)(C,{children:["Nickname:",Object(r.jsx)(z,{value:e,onChange:function(n){return i(n.target.value)}})]}),Object(r.jsxs)(C,{children:["Username:",Object(r.jsx)(z,{value:s,onChange:function(n){return b(n.target.value)}})]}),Object(r.jsxs)(C,{children:["Password:",Object(r.jsx)(z,{value:l,onChange:function(n){return f(n.target.value)}})]}),Object(r.jsx)(P,{children:"\u9001\u51fa"}),g&&Object(r.jsx)(y,{children:g})]})})}function L(){var n=Object(s.a)(["\n  padding: 20px;\n"]);return L=function(){return n},n}function F(){var n=Object(s.a)(["\n  height: 300px;\n  padding: 10px auto;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n"]);return F=function(){return n},n}function E(){var n=Object(s.a)(["\n  text-align: center;\n  width: 570px;\n  margin: 80px auto;\n  box-shadow: 5px 10px rgba(0, 0, 0, 0.5);\n"]);return E=function(){return n},n}var $=b.a.div(E()),A=b.a.div(F()),I=b.a.div(L());function J(){return Object(r.jsxs)($,{children:[Object(r.jsx)(A,{}),Object(r.jsx)(I,{children:"\u9019\u88e1\u662f\u4e00\u500b\u8d85\u7c21\u6613\u90e8\u843d\u683c\uff3e\uff3e\u6b61\u8fce\u5149\u81e8"})]})}var M=Object(c.createContext)(null);function N(){var n=Object(s.a)(["\n  border: 0;\n  background: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  outline: none;\n  :active {\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]);return N=function(){return n},n}function U(){var n=Object(s.a)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return U=function(){return n},n}function B(){var n=Object(s.a)(["\n  text-align: center;\n  margin: 100px;\n  font-weight: normal;\n"]);return B=function(){return n},n}function D(){var n=Object(s.a)(["\n  color: red;\n"]);return D=function(){return n},n}var Y=b.a.div(D()),_=b.a.div(B()),X=b.a.input(U()),R=b.a.button(N());function G(){var n=Object(c.useContext)(M).setUser,t=Object(c.useState)(""),e=Object(u.a)(t,2),i=e[0],o=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),b=s[0],j=s[1],x=Object(c.useState)(),f=Object(u.a)(x,2),h=f[0],g=f[1],v=Object(d.f)();return Object(r.jsx)(_,{children:Object(r.jsxs)("form",{onSubmit:function(){g(null),function(n,t){return fetch("".concat(p,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(i,b).then((function(t){if(0===t.ok)return g(t.message);l(t.token),O().then((function(t){if(1!==t.ok)return l(null),g(t.toString());n(t.data),v.push("/")}))}))},children:[Object(r.jsxs)("div",{children:["Username:",Object(r.jsx)(X,{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)("div",{children:["Password:",Object(r.jsx)(X,{type:"password",value:b,onChange:function(n){return j(n.target.value)}})]}),Object(r.jsx)(R,{children:"\u767b\u5165"}),h&&Object(r.jsx)(Y,{children:h})]})})}function H(){var n=Object(s.a)(["\n  margin-top: 50px;\n"]);return H=function(){return n},n}function K(){var n=Object(s.a)(["\n  color:white;\n  border: 1px solid rgba(255,255,255,0.2);\n  background: none;\n  cursor: pointer;\n  padding: 10px;\n  margin: 10px;\n  border-radius: 5px;\n  outline: none;\n  :active {\n    box-shadow: 0 5px rgba(255,255,255,0.3);\n    transform: translateY(2px);\n  }\n"]);return K=function(){return n},n}function W(){var n=Object(s.a)(["\n  margin: 20px 20px;\n  display: inline-block;\n  padding: 10px;\n  color:white;\n  font-size:10px;\n"]);return W=function(){return n},n}function Z(){var n=Object(s.a)(["\n  \n  font-size:12px;\n  padding:0px;\n  margin-top:15px;\n"]);return Z=function(){return n},n}function q(){var n=Object(s.a)(["\n  \n  font-size: 24px;\n  width:400px;\n  text-align: left;\n  text-decoration: none;\n  color: rgba(255,255,255,0.6);\n  :hover {\n    color:white;\n  }\n"]);return q=function(){return n},n}function Q(){var n=Object(s.a)(["\n  padding: 16px;\n  display: flex;\n  justify-content: space-around;\n  width: 700px;\n  margin:20px auto;\n  cursor: pointer;\n  border-radius: 5px;\n  color: rgba(255,255,255,0.3);\n  border-bottom:1px solid rgba(255,255,255,0.2);\n  :hover {\n    color:white;\n    transition-duration: 0.5s;\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(s.a)(["\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return V=function(){return n},n}function nn(){var n=Object(s.a)(["\n  width:60%;\n  margin-top: 80px;\n  text-decoration: none;\n  text-align:center;\n  \n"]);return nn=function(){return n},n}var tn=b.a.div(nn()),en=b.a.div(V()),rn=b.a.div(Q()),cn=Object(b.a)(j.b)(q()),on=b.a.div(Z()),an=b.a.div(W()),un=b.a.button(K()),sn=b.a.div(H());function bn(n){var t=n.post;return Object(r.jsxs)(rn,{children:[Object(r.jsx)(cn,{to:"/post/".concat(t.id),children:t.title}),Object(r.jsx)(on,{children:new Date(t.createdAt).toLocaleString()})]})}function jn(){var n=Object(c.useState)([]),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(),a=Object(u.a)(o,2),s=a[0],b=a[1],j=Object(c.useState)(1),d=Object(u.a)(j,2),x=d[0],l=d[1],f=Object(c.useState)(!1),p=Object(u.a)(f,2),O=p[0],g=p[1];Object(c.useEffect)((function(){h(x,5).then((function(n){return b(Math.ceil(n.headers.get("X-Total-Count")/5))})),g(!0),h(x,5).then((function(n){return n.json()})).then((function(n){g(!1),i(n)}))}),[x]);function v(n,t){O||(l(n),g(!0),h(n,t).then((function(n){return n.json()})).then((function(n){g(!1),i(n)})))}return Object(r.jsxs)(tn,{children:[O&&Object(r.jsx)(en,{children:"Loading...."}),e.map((function(n){return Object(r.jsx)(bn,{post:n},n.id)})),Object(r.jsxs)(sn,{children:[Object(r.jsx)(un,{onClick:function(){v(1,5)},children:"First"}),Object(r.jsx)(un,{onClick:function(){1!==x&&v(x-1,5)},children:"Pervious"}),Object(r.jsxs)(an,{children:[x," / ",s]}),Object(r.jsx)(un,{onClick:function(){x!==s&&v(x+1,5)},children:"Next"}),Object(r.jsx)(un,{onClick:function(){v(s,5)},children:"Last"})]})]})}function dn(){var n=Object(s.a)(["\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  width: 500px;\n  margin: 80px auto;\n  padding: 20px;\n  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n  word-break: break-word;\n"]);return dn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]);return xn=function(){return n},n}function ln(){var n=Object(s.a)(["\n  font-size: 30px;\n"]);return ln=function(){return n},n}var fn=b.a.div(ln()),pn=b.a.div(xn()),hn=b.a.div(dn()),On=function(n){var t=n.post;return t?Object(r.jsxs)(hn,{children:[Object(r.jsx)(fn,{children:t.title}),Object(r.jsx)(pn,{children:new Date(t.createdAt).toLocaleString()}),Object(r.jsx)("div",{children:t.body})]}):null};function gn(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(d.h)().id;return Object(c.useEffect)((function(){(function(n){return fetch("".concat(p,"/posts/").concat(n)).then((function(n){return n.json()}))})(o).then((function(n){i(n)}))}),[o]),Object(r.jsx)(On,{post:e})}function vn(){var n=Object(s.a)(["\n  border: 0;\n  background: none;\n  cursor: pointer;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  margin: 10px;\n  border-radius: 5px;\n  outline: none;\n  :active {\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]);return vn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  width: 50%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n"]);return mn=function(){return n},n}function wn(){var n=Object(s.a)(["\n  margin-bottom: 40px;\n"]);return wn=function(){return n},n}function kn(){var n=Object(s.a)(["\n  margin: 0px auto;\n"]);return kn=function(){return n},n}function yn(){var n=Object(s.a)(["\n  margin: 100px auto;\n  font-size: 20px;\n  text-align: center;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(s.a)(["\n  color: red;\n"]);return Sn=function(){return n},n}var Cn=b.a.div(Sn()),zn=b.a.div(yn()),Pn=b.a.div(kn()),Tn=b.a.div(wn()),Ln=b.a.textarea(mn()),Fn=b.a.button(vn());function En(){var n=Object(c.useContext)(M).user,t=Object(c.useState)(""),e=Object(u.a)(t,2),i=e[0],o=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),b=s[0],j=s[1],x=Object(c.useState)(),l=Object(u.a)(x,2),h=l[0],O=l[1],g=Object(d.f)();return n?Object(r.jsx)(zn,{children:Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),O(null),function(n,t){var e=f();return fetch("".concat(p,"/posts"),{method:"POST",headers:{authorization:"Bearer ".concat(e),"content-type":"application/json"},body:JSON.stringify({body:t,title:n})}).then((function(n){return n.json()}))}(i,b).then((function(n){0===n.ok&&O(n.message),g.push("/")}))},children:[Object(r.jsxs)(Tn,{children:["\u55e8\uff0c",n.username,"\uff0c\u6709\u4ec0\u9ebc\u8a71\u8981\u544a\u8a34\u5927\u5bb6\u7684\u55ce\uff1f"]}),Object(r.jsx)(Pn,{children:"Title:"}),Object(r.jsx)(Ln,{cols:"50",value:i,onChange:function(n){return o(n.target.value)}}),Object(r.jsx)(Pn,{children:"Content:"}),Object(r.jsx)(Ln,{rows:"10",cols:"50",value:b,onChange:function(n){return j(n.target.value)}}),Object(r.jsx)("div",{children:Object(r.jsx)(Fn,{children:"\u9001\u51fa"})}),h&&Object(r.jsx)(Cn,{children:h})]})}):null}function $n(){var n=Object(s.a)([""]);return $n=function(){return n},n}function An(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return An=function(){return n},n}function In(){var n=Object(s.a)(['\n  position:relative;\n  margin: 0px 20px;\n  font-size:14px;\n  text-decoration: none;\n  color:rgba(255,255,255,0.5);\n  cursor: pointer;\n  :hover {\n    color:white;\n  }\n  ::after {\n    content:""\n  }\n  \n  ',"\n"]);return In=function(){return n},n}function Jn(){var n=Object(s.a)(["\n  font-size: 25px;\n  margin-left: 20px;\n  margin-right: 40px;\n  color:rgba(255,255,255,0.8);\n"]);return Jn=function(){return n},n}function Mn(){var n=Object(s.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0px;\n  right:0px;\n  background: rgba(0,0,0,0.1);\n  box-sizing: border-box;\n"]);return Mn=function(){return n},n}var Nn=b.a.div(Mn()),Un=b.a.span(Jn()),Bn=Object(b.a)(j.b)(In(),(function(n){return n.$active&&'\n    color:white;\n    ::after {\n      content:"";\n      width:100%;\n      position:absolute;\n      bottom:0;\n      left:0;\n      height:0.5px;\n      background:white;\n      transform: scaleX(0);\n      transform-origin: right center;\n      transition: transform .6s;\n      transition-duration: 1s;\n    }\n    \n    '})),Dn=b.a.div(An()),Yn=b.a.div($n());function _n(){var n=Object(d.f)(),t=Object(d.g)(),e=Object(c.useContext)(M),i=e.user,o=e.setUser;return Object(r.jsxs)(Nn,{children:[Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Un,{children:"This is your first blog"}),Object(r.jsx)(Bn,{to:"/",$active:"/"===t.pathname,children:"Home"}),Object(r.jsx)(Bn,{to:"/aboutMe",$active:"/aboutMe"===t.pathname,children:"About me"}),i&&Object(r.jsx)(Bn,{to:"/newPost",$active:"/newPost"===t.pathname,children:"Release"})]}),Object(r.jsxs)(Yn,{children:[Object(r.jsx)(Bn,{to:"/register",$active:"/register"===t.pathname,children:"Register"}),!i&&Object(r.jsx)(Bn,{to:"/login",$active:"/login"===t.pathname,children:"Login"}),i&&Object(r.jsx)(Bn,{onClick:function(){l(""),o(""),"/"!==t.pathname&&n.push("/")},children:"Logout"})]})]})}function Xn(){var n=Object(s.a)(["\n  color:rgba(255,255,255,0,5);\n  font-size:10px;\n"]);return Xn=function(){return n},n}function Rn(){var n=Object(s.a)(["\n  color:white;\n  margin-left:50px;\n  font-size:10px;\n"]);return Rn=function(){return n},n}function Gn(){var n=Object(s.a)(["\n  justify-content:center;\n  align-items:center;\n  position:fixed;\n  bottom:0px;\n  left:0px;\n  height: 50px;\n  background: rgba(0,0,0,0.1);\n  color:rgba(255,255,255,0.5);\n  width: 100%;\n  text-align: center;\n  display:flex;\n"]);return Gn=function(){return n},n}var Hn=b.a.div(Gn()),Kn=b.a.div(Rn()),Wn=b.a.div(Xn());function Zn(){return Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Wn,{children:"Copyright 2020, Example Corporation"}),Object(r.jsx)(Kn,{children:"Facebook"}),Object(r.jsx)(Kn,{children:"Twitter"}),Object(r.jsx)(Kn,{children:"Instagram"}),Object(r.jsx)(Kn,{children:"Flickr"})]})}var qn=e.p+"static/media/background.0cc4d1de.jpg",Qn=e(29),Vn=e.n(Qn);function nt(){var n=Object(s.a)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.15);\n  top: 250px;\n  right: 0px;\n  width: 550px;\n  height: 100%;\n"]);return nt=function(){return n},n}function tt(){var n=Object(s.a)(["\n  min-height: 650px;\n"]);return tt=function(){return n},n}function et(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return et=function(){return n},n}function rt(){var n=Object(s.a)(["\n  padding-top: 64px;\n"]);return rt=function(){return n},n}function ct(){var n=Object(s.a)(['\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: -999;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url("','");\n']);return ct=function(){return n},n}var it=b.a.div(ct(),qn),ot=b.a.div(rt()),at=b.a.div(et()),ut=b.a.div(tt()),st=b.a.div(nt());var bt=function(){var n=i.a.useState(null),t=Object(u.a)(n,2),e=t[0],o=t[1];return Object(c.useEffect)((function(){O().then((function(n){n.ok&&o(n.data)}))}),[]),Object(r.jsx)(M.Provider,{value:{user:e,setUser:o},children:Object(r.jsxs)(ot,{children:[Object(r.jsx)(it,{}),Object(r.jsx)(j.a,{children:Object(r.jsxs)(at,{children:[Object(r.jsx)(_n,{}),Object(r.jsx)(ut,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",children:Object(r.jsx)(jn,{})}),Object(r.jsx)(d.a,{path:"/post/:id",children:Object(r.jsx)(gn,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/aboutMe",children:Object(r.jsx)(J,{})}),Object(r.jsx)(d.a,{exact:!0,path:"/newPost",children:Object(r.jsx)(En,{})}),Object(r.jsx)(d.a,{path:"/register",children:Object(r.jsx)(T,{})}),Object(r.jsx)(d.a,{path:"/login",children:Object(r.jsx)(G,{})})]})}),Object(r.jsx)(st,{children:Object(r.jsx)(Vn.a,{url:"https://www.youtube.com/watch?v=7KXGZAEWzn0",playing:!0,volume:.8,width:"450px",heght:"300px"})}),Object(r.jsx)(Zn,{})]})})]})})},jt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,59)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(bt,{})}),document.getElementById("root")),jt()}},[[58,1,2]]]);
//# sourceMappingURL=main.a01868ec.chunk.js.map