(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),o=n(42),l=n(5),s=n(6),u=n(8),m=n(7),p=n(9),h=n(43),f=n(44),E=n(19),b="https://eb-apis.firebaseapp.com/api",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var v={Accept:"application/json"},j=function(e,t){return fetch("".concat(b,"/unicorns/").concat(e.id),{method:"PUT",headers:Object(E.a)({},v,{"Content-Type":"application/json"}),body:JSON.stringify({location:t})}).then(function(e){return e.json()})},O=n(11),y=n(12),N=n(16),g=n(13),k=n(17),U=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",null,r.a.createElement("div",{className:"unicorn"},r.a.createElement("div",{className:"unicorn-top"},r.a.createElement("div",{className:"unicorn-cover",style:{width:200,height:200,backgroundImage:"url(".concat(this.props.unicorn.thumbnail?this.props.unicorn.thumbnail:"",")")}}),r.a.createElement("div",{className:"unicorn-location-changer"},r.a.createElement("select",{label:"select unicorn",onChange:function(t){e.props.placeUnicorns(e.props.unicorn,t.target.value)},value:this.props.unicorn.location},r.a.createElement("option",{label:"move unicorn",value:"move",disabled:!0},"Move to..."),r.a.createElement("option",{value:"barn"},"Barn"),r.a.createElement("option",{value:"pasture"},"Pasture"),r.a.createElement("option",{value:"trail"},"Trail")))),r.a.createElement("div",{className:"unicorn-title"},this.props.unicorn.title),r.a.createElement("div",{className:"unicorn-visitor"},"Visitor: ",this.props.unicorn.visitor?this.props.unicorn.visitor:"No visitor found")))}}]),t}(a.Component),w=function(e){function t(){return Object(O.a)(this,t),Object(N.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"unicorn-location"},r.a.createElement("h2",{className:"unicorn-location-title"},this.props.title),r.a.createElement("div",{className:"unicorn-location-unicorns"},r.a.createElement("ol",{className:"unicorns-grid"},this.props.unicorns&&this.props.unicorns.map(function(t){return r.a.createElement(U,{key:t.id,placeUnicorns:e.props.placeUnicorns,unicorn:t})}))))}}]),t}(a.Component),C=function(e){function t(){return Object(O.a)(this,t),Object(N.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"header-content"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Services")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"About Us")))}}]),t}(a.Component),S=n(18),T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"footer-content"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/ebitsdev"},r.a.createElement(S.a,{icon:["fab","github"]})," Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/ebamba"},r.a.createElement(S.a,{icon:["fab","twitter"]})," Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://linkedin.com/in/emmanuelbamba/"},r.a.createElement(S.a,{icon:["fab","linkedin"]})," LinkedIn")))}}]),t}(a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"list-unicorns"},r.a.createElement("div",{className:"list-unicorns-title"},r.a.createElement("h1",null,"Unicorn Ranch"),r.a.createElement(C,null)),r.a.createElement("div",{className:"list-unicorns-content"},r.a.createElement(w,{title:"Barn",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"barn"===e.location})}),r.a.createElement(w,{title:"Pasture",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"pasture"===e.location})}),r.a.createElement(w,{title:"Trail",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"trail"===e.location})}))),r.a.createElement(T,null))}}]),t}(a.Component),x=n(10),A=n(23),B=n(41),I=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-not-found"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,r.a.createElement("strong",null,"Page not found :(")),r.a.createElement("p",null,"The requested page ",r.a.createElement("code",null,t.pathname)," could not be found."),r.a.createElement(B.a,{text:"test",to:"/"},"Go Home")))};n(33);x.b.add(A.a);var J=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={unicorns:[]},n.placeUnicorns=function(e,t){j(e,t).then(function(a){e.location=t,n.setState(function(t){return{unicorns:t.unicorns.filter(function(t){return t.id!==e.id}).concat([e])}})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/unicorns"),{headers:v}).then(function(e){return e.json()}).then(function(e){return e.unicorns}).then(function(t){e.setState({unicorns:t})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(P,{unicorns:e.state.unicorns,placeUnicorns:e.placeUnicorns})}}),r.a.createElement(f.a,{component:I})))}}]),t}(a.Component);n(36),n(38);i.a.render(r.a.createElement(o.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.1e349c01.chunk.js.map