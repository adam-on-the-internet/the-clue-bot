(this["webpackJsonpthe-clue-bot"]=this["webpackJsonpthe-clue-bot"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(29),i=n.n(a),j=(n(36),n(2)),o=n(3),u=n(5),l=n(4),b=(n(37),n(12)),h=n(6);var d={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},O={color:"#fff",textDecoration:"none",padding:5},p=function(){return Object(r.jsxs)("header",{style:d,children:[Object(r.jsx)("h1",{children:"The Clue Bot"}),Object(r.jsx)("h2",{children:Object(r.jsx)("a",{style:O,href:"https://twitter.com/TheClueBot",target:"_blank",rel:"noreferrer",children:"on Twitter @TheClueBot"})}),Object(r.jsxs)("h3",{children:[Object(r.jsx)(b.b,{to:"/",style:O,children:"Current Mystery"}),"|",Object(r.jsx)(b.b,{to:"/solved",style:O,children:"Solved Mysteries"}),"|",Object(r.jsx)(b.b,{to:"/about",style:O,children:"About"}),"|",Object(r.jsx)(b.b,{to:"/stats",style:O,children:"Stats"})]})]})},x=n(15),m=n.n(x),y="https://aoti-basic-express-app.herokuapp.com/clueBot",v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"About"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{style:f,children:[Object(r.jsx)("p",{children:"The Clue Bot runs through a cycle of creating and solving murder mysteries. Each mystery consists of a Victim, Culprit, Murder Weapon, Crime Scene, and Clues that lead to the solution. These aspects and more are randomly-generated from lists I have compiled. A Twitter Bot tweets out updates as the mysteries are unravelled."}),Object(r.jsx)("p",{children:"Created by:"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"http://www.adamontheinternet.com/",target:"_blank",rel:"noreferrer",children:"Adam on the Internet"})})]})]})}}]),n}(c.Component),f={paddingLeft:30,paddingRight:30,textAlign:"left"},g=v,C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Loading..."})})}}]),n}(c.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mystery,t=new Date(e.dateStarted),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),c=new Intl.DateTimeFormat("en",{month:"long"}).format(t),s=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t),a="Mystery started on ".concat(c," ").concat(s,", ").concat(n);return Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:a})})}}]),n}(c.Component),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mystery,t=e.solved?"".concat(e.victim," was killed by ").concat(e.culprit," in the ").concat(e.scene," with the ").concat(e.weapon,"."):"The mystery has not yet been solved.";return Object(r.jsx)("div",{children:Object(r.jsxs)("p",{children:["Solution: ",t]})})}}]),n}(c.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mystery.announcements.map((function(e,t){var n=function(e){var t=e.indexOf("(The");return e.slice(0,t)}(e);return Object(r.jsx)("li",{style:S,children:n},t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{children:"Announcements"}),Object(r.jsx)("hr",{}),Object(r.jsx)("ul",{style:T,children:e})]})}}]),n}(c.Component);var T={textAlign:"left"},S={marginTop:10},N=w;var B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.announcements,n=e.item,c=t.find((function(e){return e.includes("Clue #")&&e.includes(n)})),s="",a="";return void 0!==c&&(s="X",a=function(e){var t=e.indexOf("(The");return e.slice(0,t)}(c)),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:s}),Object(r.jsx)("td",{children:a})]})}}]),n}(c.Component),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tableName,n=e.options,c=e.announcements;if(void 0===n)return Object(r.jsxs)("p",{children:[t," options are not known yet."]});var s=n.map((function(e,t){return Object(r.jsx)(B,{item:e,announcements:c,index:t},t)}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[t," Clue Tracker"]}),Object(r.jsxs)("table",{style:A,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:t}),Object(r.jsx)("th",{children:"Eliminated"}),Object(r.jsx)("th",{children:"Clue"})]})}),Object(r.jsx)("tbody",{children:s})]})]})}}]),n}(c.Component),A={marginLeft:"auto",marginRight:"auto",marginBottom:10},D=F,I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mystery;return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsx)("h3",{children:"Clue Trackers"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{style:L,children:[Object(r.jsx)(D,{tableName:"Scene",announcements:e.announcements,options:e.sceneOptions}),Object(r.jsx)(D,{tableName:"Weapon",announcements:e.announcements,options:e.weaponOptions}),Object(r.jsx)(D,{tableName:"Suspect",announcements:e.announcements,options:e.culpritOptions})]})]})}}]),n}(c.Component),L={marginLeft:20,marginRight:20},_=I,R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.mystery;return null===e?Object(r.jsx)(C,{}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("hr",{}),Object(r.jsx)(k,{mystery:e}),Object(r.jsx)(M,{mystery:e}),Object(r.jsx)(_,{mystery:e}),Object(r.jsx)(N,{mystery:e})]})}}]),n}(c.Component),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.currentMystery;return Object(r.jsx)("div",{children:Object(r.jsx)(R,{mystery:e})})}}]),n}(c.Component),E=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.groupName,n=e.occurrences,c=n.filter((function(e,t){return t<5})).map((function(e,t){return Object(r.jsxs)("p",{children:["#",t+1,". ",e.name," (",e.count," times)"]},t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("h2",{children:["Occurrences of ",t]}),c]})}}]),n}(c.Component),J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){if(null===this.props.stats)return Object(r.jsx)("div",{children:Object(r.jsx)(C,{})});var e=this.props.stats,t=e.crimeSceneOccurrences,n=e.culpritOccurrences,c=e.murderWeaponOccurrences,s=e.victimOccurrences,a=e.sceneCount,i=e.solvedMysteryCount,j=e.suspectCount,o=e.weaponCount;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[i," mysteries have been solved!"]}),Object(r.jsxs)("p",{children:["There are ",a," crime scenes available."]}),Object(r.jsxs)("p",{children:["There are ",j," suspects available."]}),Object(r.jsxs)("p",{children:["There are ",o," weapons available."]}),Object(r.jsx)(E,{groupName:"Crime Scenes",occurrences:t}),Object(r.jsx)(E,{groupName:"Culprits",occurrences:n}),Object(r.jsx)(E,{groupName:"Murder Weapons",occurrences:c}),Object(r.jsx)(E,{groupName:"Victims",occurrences:s})]})}}]),n}(c.Component),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.solvedMysteries;if(null===e)return Object(r.jsx)(C,{});var t=e.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.title}),Object(r.jsx)("td",{children:Object(r.jsx)(b.b,{to:"/mystery/"+e._id,style:X,children:Object(r.jsx)("button",{children:"Details"})})})]},e._id)}));return Object(r.jsx)("div",{children:Object(r.jsxs)("table",{style:V,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Details"})]})}),Object(r.jsx)("tbody",{children:t})]})})}}]),n}(c.Component),V={marginLeft:"auto",marginRight:"auto",marginBottom:10},X={color:"#000",textDecoration:"none",padding:5},q=P,z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.solvedMysteries,n=e.id;if(null===t||null===n)return Object(r.jsx)(C,{});var c=t.find((function(e){return e._id===n}));return void 0===c?Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"No mystery found."})}):Object(r.jsx)("div",{children:Object(r.jsx)(R,{mystery:c})})}}]),n}(c.Component),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={solvedMysteries:null,currentMystery:null,stats:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.a.get(y).then((function(t){return e.setState({solvedMysteries:t.data})})),m.a.get("https://aoti-basic-express-app.herokuapp.com/clueBot/current").then((function(t){return e.setState({currentMystery:t.data})})),m.a.get("https://aoti-basic-express-app.herokuapp.com/clueBot/stats").then((function(t){return e.setState({stats:t.data})}))}},{key:"render",value:function(){var e=this;return Object(r.jsx)(b.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(p,{}),Object(r.jsx)(h.a,{exact:!0,path:"/",render:function(t){return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(W,{currentMystery:e.state.currentMystery})})}}),Object(r.jsx)(h.a,{exact:!0,path:"/stats",render:function(t){return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h2",{children:"Stats"}),Object(r.jsx)("hr",{}),Object(r.jsx)(J,{stats:e.state.stats})]})}}),Object(r.jsx)(h.a,{exact:!0,path:"/solved",render:function(t){return Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)("h2",{children:"Solved Mysteries"}),Object(r.jsx)("hr",{}),Object(r.jsx)(q,{solvedMysteries:e.state.solvedMysteries})]})}}),Object(r.jsx)(h.a,{exact:!0,path:"/mystery/:id",render:function(t){return Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(z,{solvedMysteries:e.state.solvedMysteries,id:t.match.params.id})})}}),Object(r.jsx)(h.a,{path:"/about",exact:!0,component:g})]})})})}}]),n}(c.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),H()}},[[60,1,2]]]);
//# sourceMappingURL=main.a90ec023.chunk.js.map