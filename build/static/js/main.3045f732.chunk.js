(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},25:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),o=t.n(c),i=t(32),l=t(5),s=t(6),u=t(8),p=t(7),m=t(9),h=t(34),d=t(33),f=t(12),v="https://eb-apis.firebaseapp.com/api",E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var b={Accept:"application/json"},j=function(e,n){return fetch("".concat(v,"/unicorns/").concat(e.id),{method:"PUT",headers:Object(f.a)({},b,{"Content-Type":"application/json"}),body:JSON.stringify({location:n})}).then(function(e){return e.json()})},O=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("li",null,r.a.createElement("div",{className:"unicorn"},r.a.createElement("div",{className:"unicorn-top"},r.a.createElement("div",{className:"unicorn-cover",style:{width:200,height:200,backgroundImage:"url(".concat(this.props.unicorn.thumbnail?this.props.unicorn.thumbnail:"",")")}}),r.a.createElement("div",{className:"unicorn-location-changer"},r.a.createElement("select",{label:"select unicorn",onChange:function(n){e.props.placeUnicorns(e.props.unicorn,n.target.value)},value:this.props.unicorn.location},r.a.createElement("option",{label:"move unicorn",value:"move",disabled:!0},"Move to..."),r.a.createElement("option",{value:"barn"},"Barn"),r.a.createElement("option",{value:"pasture"},"Pasture"),r.a.createElement("option",{value:"trail"},"Trail"),r.a.createElement("option",{value:"none"},"None")))),r.a.createElement("div",{className:"unicorn-title"},this.props.unicorn.title),r.a.createElement("div",{className:"unicorn-visitor"},this.props.unicorn.visitor?this.props.unicorn.visitor:"No visitor found")))}}]),n}(a.Component),N=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"unicorn-location"},r.a.createElement("h2",{className:"unicorn-location-title"},this.props.title),r.a.createElement("div",{className:"unicorn-location-unicorns"},r.a.createElement("ol",{className:"unicorns-grid"},this.props.unicorns&&this.props.unicorns.map(function(n){return r.a.createElement(O,{key:n.id,placeUnicorns:e.props.placeUnicorns,unicorn:n})}))))}}]),n}(a.Component),g=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"list-unicorns"},r.a.createElement("div",{className:"list-unicorns-title"},r.a.createElement("h1",null,"Unicorn Ranch")),r.a.createElement("div",{className:"list-unicorns-content"},r.a.createElement("div",null,r.a.createElement(N,{title:"Barn",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"barn"===e.location})}),r.a.createElement(N,{title:"Pasture",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"pasture"===e.location})}),r.a.createElement(N,{title:"Trail",placeUnicorns:this.props.placeUnicorns,unicorns:this.props.unicorns.filter(function(e){return"trail"===e.location})}))))}}]),n}(a.Component),y=t(31),U=function(e){var n=e.location;return r.a.createElement("div",null,r.a.createElement("div",{className:"container-not-found"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,r.a.createElement("strong",null,"Page not found :(")),r.a.createElement("p",null,"The requested page ",r.a.createElement("code",null,n.pathname)," could not be found."),r.a.createElement(y.a,{text:"test",to:"/"},"Go Home")))},k=(t(25),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(u.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(r)))).state={unicorns:[]},t.placeUnicorns=function(e,n){j(e,n).then(function(a){e.location=n,t.setState(function(n){return{unicorns:n.unicorns.filter(function(n){return n.id!==e.id}).concat([e])}})})},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/unicorns"),{headers:b}).then(function(e){return e.json()}).then(function(e){return e.unicorns}).then(function(n){e.setState({unicorns:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{unicorns:e.state.unicorns,placeUnicorns:e.placeUnicorns})}}),r.a.createElement(d.a,{component:U})))}}]),n}(a.Component));t(28);o.a.render(r.a.createElement(i.a,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.3045f732.chunk.js.map