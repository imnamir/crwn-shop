(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.ed28accb.svg"},33:function(e,t,a){e.exports=a(61)},38:function(e,t,a){},39:function(e,t,a){},47:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(28),c=a.n(r),s=(a(38),a(7)),l=a(8),o=a(9),m=a(11),p=a(10),u=(a(39),a(1)),b=a(21),g=a.n(b),h=a(29),d=a(30),v=a(13),f=a.n(v),k=(a(41),a(43),function(){var e=Object(d.a)(g.a.mark((function e(t,a){var n,i,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=U.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:return e.sent.exists||(i=t.displayName,r=t.email,c=new Date,n.set(Object(h.a)({displayName:i,email:r,createdAt:c},a))),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}());f.a.initializeApp({apiKey:"AIzaSyBRuKLqMwtDE1aecwH40222unXI6P0U2ck",authDomain:"crwn-db-c7352.firebaseapp.com",databaseURL:"https://crwn-db-c7352.firebaseio.com",projectId:"crwn-db-c7352",storageBucket:"crwn-db-c7352.appspot.com",messagingSenderId:"1088296837780",appId:"1:1088296837780:web:ce9c4f19115636a6e2ca81"});var w=f.a.auth(),U=f.a.firestore(),E=new f.a.auth.GoogleAuthProvider;E.setCustomParameters({prompt:"select_account"});var N=function(){return w.signInWithPopup(E)},j=(f.a,a(31)),y=a.n(j),O=(a(47),function(e){var t=e.currentUser;return i.a.createElement("div",{className:"header"},i.a.createElement(s.b,{className:"logo-container",to:"crwn-shop/"},i.a.createElement("img",{className:"logo",src:y.a,alt:""})),i.a.createElement("div",{className:"options"},i.a.createElement(s.b,{className:"option",to:"crwn-shop/shop"},"SHOP"),i.a.createElement(s.b,{className:"option",to:"crwn-shop/shop"},"CONTACT"),t?i.a.createElement("div",{className:"option",onClick:function(){return w.signOut()}},"SIGN OUT"):i.a.createElement(s.b,{className:"option",to:"crwn-shop/signin"},"SIGN IN")))}),B=a(6),S=(a(52),Object(u.f)((function(e){var t=e.title,a=e.imageUrl,n=e.size,r=e.history,c=e.match,s=e.linkUrl;return i.a.createElement("div",{className:"menu-item ".concat(n),onClick:function(){return r.push("".concat(c.url).concat(s))}},i.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),i.a.createElement("div",{className:"content"},i.a.createElement("h1",{className:"title"},t.toUpperCase()),i.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),C=(a(53),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"directory-menu"},this.state.sections.map((function(e){var t=e.id,a=Object(B.a)(e,["id"]);return i.a.createElement(S,Object.assign({key:t},a))})))}}]),a}(i.a.Component)),T=(a(54),function(){return i.a.createElement("div",{className:"homepage"},i.a.createElement(C,null))}),I=a(17),J=(a(55),function(e){var t=e.handleChange,a=e.label,n=Object(B.a)(e,["handleChange","label"]);return i.a.createElement("div",{className:"group"},i.a.createElement("input",Object.assign({onChange:t},n,{className:"form-input"})),a?i.a.createElement("label",{className:"".concat(n.value?"shrink":""," form-input-label")},a):null)}),W=(a(56),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(B.a)(e,["children","isGoogleSignIn"]);return i.a.createElement("button",Object.assign({className:" ".concat(a?"google-sign-in":""," custom-button")},n),t)}),A=(a(57),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSubmit=function(t){e.setState({email:"",password:""}),t.preventDefault()},e.handleChange=function(t){var a=t.target,n=a.name,i=a.value;e.setState(Object(I.a)({},n,i))},e.state={email:"",password:""},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sign-in"},i.a.createElement("h1",null,"I already have an Account"),i.a.createElement("span",null,"Sign in with your email and password"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(J,{type:"email",name:"email",label:"email",value:this.state.email,handleChange:this.handleChange,required:!0}),i.a.createElement(J,{type:"password",name:"password",label:"password",value:this.state.password,handleChange:this.handleChange,required:!0}),i.a.createElement("div",{className:"button"},i.a.createElement(W,{type:"submit"},"Sign In"),i.a.createElement(W,{isGoogleSignIn:!0,onClick:N},"Sign In With Google"))))}}]),a}(i.a.Component)),G=(a(58),function(){return i.a.createElement("div",{className:"signin-and-signup"},i.a.createElement(A,null))}),M=[{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:1,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:2,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:3,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:4,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:5,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:6,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:7,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:8,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},{id:3,title:"Jackets",routeName:"jackets",items:[{id:1,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:2,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:3,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:4,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:5,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},{id:4,title:"Womens",routeName:"womens",items:[{id:1,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:2,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:3,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:4,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:5,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:6,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:7,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},{id:5,title:"Mens",routeName:"mens",items:[{id:1,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:2,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:3,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:4,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:5,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:6,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}],P=(a(59),function(e){var t=e.name,a=e.imageUrl,n=e.price;return i.a.createElement("div",{className:"shop-item"},i.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),i.a.createElement("div",{className:"item-footer"},i.a.createElement("span",{className:"name"},t),i.a.createElement("span",{className:"price"},n)))});a(60);function D(e){var t=e.title,a=e.items;return i.a.createElement("div",{className:"shop-preview"},i.a.createElement("h1",null,t.toUpperCase()),i.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){var t=e.id,a=Object(B.a)(e,["id"]);return i.a.createElement(P,Object.assign({key:t},a))}))))}var x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={collections:M},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.collections;return i.a.createElement("div",{className:"shop-page"},e.map((function(e){var t=e.id,a=Object(B.a)(e,["id"]);return i.a.createElement(D,Object.assign({key:t},a))})))}}]),a}(i.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).unSubscribeFromAuth=null,e.state={currentUser:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.unSubscribeFromAuth=w.onAuthStateChanged((function(e){k(e)}))}},{key:"componentWillUnmount",value:function(){this.unSubscribeFromAuth()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(O,{currentUser:this.state.currentUser}),i.a.createElement(u.c,null,i.a.createElement(u.a,{exact:!0,path:"crwn-shop/",component:T}),i.a.createElement(u.a,{path:"crwn-shop/shop",component:x}),i.a.createElement(u.a,{path:"crwn-shop/signin",component:G})))}}]),a}(i.a.Component);c.a.render(i.a.createElement(s.a,null,i.a.createElement(z,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7e54ca09.chunk.js.map