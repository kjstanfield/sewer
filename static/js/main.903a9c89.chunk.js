(this.webpackJsonpsewer=this.webpackJsonpsewer||[]).push([[0],{120:function(e,a,t){e.exports=t.p+"static/media/loader.47da510e.png"},121:function(e,a,t){e.exports=t.p+"static/media/ded_rat.9e0c3117.png"},123:function(e,a,t){},124:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),l=t.n(c),s=t(48),o=t.n(s),i=function(){return n.a.createElement("div",{className:"nav"},n.a.createElement("img",{src:o.a,alt:"The Sewer"}))},m=t(4),u=t.n(m),p=t(13),d=t(10),v=t(21),h=[{displayName:"Kj",rname:"Kyle",server:"Tichondrius",slug:"tichondrius",characterName:"magnetic"},{displayName:"Pizzasupper",rname:"Todd",server:"Area 52",slug:"area-52",characterName:"detresse"},{displayName:"Brain",rname:"Brian",server:"Area 52",slug:"area-52",characterName:"bighamspankr"},{displayName:"Ben",rname:"Ben",server:"Area 52",slug:"area-52",characterName:"daporksword"},{displayName:"tomb",rname:"Tom",server:"Area 52",slug:"area-52",characterName:"bennet"},{displayName:"Cashews",rname:"Pete",server:"Area 52",slug:"area-52",characterName:"moldman"},{displayName:"Muenster",rname:"Dalton",server:"Tichondrius",slug:"tichondrius",characterName:"hellim"},{displayName:"Drlol",rname:"Cody",server:"Mug'thol",slug:"mugthol",characterName:"fluentx"},{displayName:"Fizzle",rname:"Josh",server:"Kil'jaeden",slug:"kiljaeden",characterName:"stend\xe1r"}],E=t(18),f=t(19);var g=function(e){var a=e.milliseconds,t=new Date(a),r=t.toDateString(a)+" "+t.toLocaleTimeString(a);return n.a.createElement("div",{className:"login"},n.a.createElement("div",null,"Last Login: ",r))};var b=function(e){var a=e.data;return n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{className:"tableFont"},"Current Rating:"),n.a.createElement("td",{className:"tableFont tableResult"},a.rating?a.rating:0)),n.a.createElement("tr",null,n.a.createElement("td",{className:"tableFont"},"Games:"),n.a.createElement("td",{className:"tableFont tableResult"},a.season_match_statistics?a.season_match_statistics.played:0)),n.a.createElement("tr",null,n.a.createElement("td",{className:"tableFont"},"Wins:"),n.a.createElement("td",{className:"tableFont tableResult"},a.season_match_statistics?a.season_match_statistics.won:0)),n.a.createElement("tr",null,n.a.createElement("td",{className:"tableFont"},"Losses:"),n.a.createElement("td",{className:"tableFont tableResult"},a.season_match_statistics?a.season_match_statistics.lost:0)))},N=t(20),w=t(22),y=t(49),_=t(52);function k(e,a){return a=a||"",e.replace(/\s/g,"").toLowerCase()+a}var j=function(e){var a=e.rname,t=e.server,r=e.slug,c=e.character,l=e.gender,s=e.charClass,o=e.race,i=e.level,m=e.ilevel,u=e.pvp,p=e.avatar_url,d=(e.bust_url,e.render_url,e.name,e.last_login);return n.a.createElement(N.a,null,n.a.createElement(w.a,null,n.a.createElement(N.a.Toggle,{as:w.a.Header,eventKey:"0"},n.a.createElement("div",{className:"rat-container ".concat(k(s))},n.a.createElement("img",{src:p,className:"avatar",alt:"character avatar"}),n.a.createElement("div",{className:"rat-inner"},n.a.createElement("div",{className:"name"},c),n.a.createElement("div",{className:"server"},t),n.a.createElement("div",null,"Level: ",n.a.createElement("span",{className:"level"},i)),n.a.createElement("div",{className:"tag"},"Brian"===a?n.a.createElement("span",null,n.a.createElement(E.a,{icon:f.c})):"Male"===l?n.a.createElement("span",null,n.a.createElement(E.a,{icon:f.a})):n.a.createElement("span",null,n.a.createElement(E.a,{icon:f.b}))," ",o," ",s)))),n.a.createElement(N.a.Collapse,{eventKey:"0"},n.a.createElement(w.a.Body,null,n.a.createElement("div",{className:"info-wrapper"},n.a.createElement(y.a,{bordered:!0,hover:!0,size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},"Average Item Level:"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"2",className:"tableResult"},m))),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},"2v2"))),n.a.createElement(b,{data:u?u.a2:0}),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{colSpan:"2"},"3v3"))),n.a.createElement(b,{data:u?u.a3:0}),n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"armory",colSpan:"2"},n.a.createElement(_.a,{size:"lg",variant:"secondary",href:"https://worldofwarcraft.com/en-us/character/us/".concat(r,"/").concat(k(c)),target:"_blank"},c,"'s Armory"))))),n.a.createElement(g,{milliseconds:d}))))))},O=function(e){var a=e.characters;return n.a.createElement("div",{className:"rat-list"},0===a.length?n.a.createElement("h1",null,"No Characters Found"):a.map((function(e,a){var t=e.name,r=e.rname,c=e.realm,l=e.gender,s=e.race,o=e.level,i=e.average_item_level,m=e.character_class,u=e.displayName,p=e.pvp,d=e.avatar_url,v=e.bust_url,h=e.render_url,E=e.last_login_timestamp;return n.a.createElement(j,{key:t,name:u,rname:r,server:c.name.en_US,slug:c.slug,character:t,gender:l.name.en_US,charClass:m.name.en_US,race:s.name.en_US,level:o,ilevel:i,pvp:p,avatar_url:d,bust_url:v,render_url:h,last_login:E})})))},x=t(50),A=t(51),z=t(63),S=new(function(){function e(){Object(x.a)(this,e),this.blizzApi=new z({region:"us",clientId:"16cbdd56489b4bcd8e0449315c2d8178",clientSecret:"1UkQA7K7WpHG7kCP2hX0Gql1RqRA0pmi"})}return Object(A.a)(e,[{key:"getImages",value:function(){var e=Object(d.a)(u.a.mark((function e(a,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.blizzApi.query("/profile/wow/character/".concat(a,"/").concat(t,"/character-media?namespace=profile-us"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"getArenaBracket",value:function(){var e=Object(d.a)(u.a.mark((function e(a,t){var r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.blizzApi.query("/profile/wow/character/".concat(a,"/").concat(t,"/pvp-bracket/2v2?namespace=profile-us"));case 3:return r=e.sent,e.next=6,this.blizzApi.query("/profile/wow/character/".concat(a,"/").concat(t,"/pvp-bracket/3v3?namespace=profile-us"));case 6:return n=e.sent,c={a2:r,a3:n},e.abrupt("return",{pvp:c});case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{pvp:null});case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(a,t){return e.apply(this,arguments)}}()},{key:"getProfile",value:function(){var e=Object(d.a)(u.a.mark((function e(a,t,r){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.blizzApi.query("/profile/wow/character/".concat(a,"/").concat(t,"?namespace=profile-us"));case 2:return(n=e.sent).rname=r,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(a,t,r){return e.apply(this,arguments)}}()}]),e}()),F=t(120),B=t(121),C=function(){var e=Object(r.useState)([]),a=Object(v.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)(!0),s=Object(v.a)(l,2),o=s[0],i=s[1],m=Object(r.useState)(null),E=Object(v.a)(m,2),f=E[0],g=E[1],b=function(){var e=Object(d.a)(u.a.mark((function e(a){var t,r,n,c,l,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.slug,r=a.characterName,n=a.rname,c=Object(p.a)({},a),e.prev=2,e.next=5,S.getProfile(t,r,n);case 5:return l=e.sent,e.next=8,S.getImages(t,r);case 8:return s=e.sent,e.next=11,S.getArenaBracket(t,r);case 11:o=e.sent,c=Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},c),s),l),o),e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(2),console.error(e.t0),e.t0;case 19:return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(a){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",Promise.all(h.map((function(e){return b(e)}))));case 4:throw e.prev=4,e.t0=e.catch(0),console.error(e.t0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){N().then((function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*a),r=e[a];e[a]=e[t],e[t]=r}c(e),i(!1)})).catch((function(e){console.log(e),g(e.message),i(!1)}))}),[]),o?n.a.createElement("div",{className:"loading-container"},n.a.createElement("img",{className:"rotate",src:F,alt:"loading"})):f?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"error-container"},n.a.createElement("code",null,"Error! ",f)),n.a.createElement("img",{src:B,alt:"error"})):n.a.createElement(O,{characters:t})};var R=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i,null),n.a.createElement("div",{className:"main"},n.a.createElement(C,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(122),t(123);l.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/logo.92f74779.png"},53:function(e,a,t){e.exports=t(124)}},[[53,1,2]]]);
//# sourceMappingURL=main.903a9c89.chunk.js.map