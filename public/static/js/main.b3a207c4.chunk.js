(this.webpackJsonpresume_starter_pack=this.webpackJsonpresume_starter_pack||[]).push([[0],{164:function(e,c,s){},165:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(4),n=s(87),i=s.n(n),l=(s(94),s(17)),r=s(88),j=s.n(r),o=function(e){var c=e.data;if(c)var s=c.name,a=c.occupation,n=c.description,i=c.address.city,l=c.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsxs)("header",{id:"home",children:[Object(t.jsxs)("nav",{id:"nav-wrap",children:[Object(t.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(t.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(t.jsxs)("ul",{id:"nav",className:"nav",children:[Object(t.jsx)("li",{className:"current",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(t.jsx)("div",{className:"row banner",children:Object(t.jsxs)("div",{className:"banner-text",children:[Object(t.jsx)("h1",{className:"responsive-headline",children:Object(t.jsx)(j.a,{typing:.5,children:s?"I'm ".concat(s,"."):null})}),Object(t.jsxs)("h3",{children:["Based in ",i,". ",Object(t.jsx)("span",{children:a}),". ",n,"."]}),Object(t.jsx)("hr",{}),Object(t.jsx)("ul",{className:"social",children:l})]})}),Object(t.jsx)("p",{className:"scrolldown",children:Object(t.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(t.jsx)("i",{className:"icon-down-circle"})})})]})},d=function(e){var c=e.data;if(c)var s=c.social.map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:e.url,children:Object(t.jsx)("i",{className:e.className})})},e.name)}));return Object(t.jsx)("footer",{children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"twelve columns",children:[Object(t.jsx)("ul",{className:"social-links",children:s}),Object(t.jsx)("ul",{className:"copyright",children:Object(t.jsx)("li",{children:"Updated by Jeetpal Singh With React"})})]}),Object(t.jsx)("div",{id:"go-top",children:Object(t.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(t.jsx)("i",{className:"icon-up-open"})})})]})})},h=function(e){var c=e.data;if(c)var s=c.name,a="images/"+c.image,n=c.bio,i=c.address.street,l=c.address.city,r=c.address.state,j=c.address.zip,o=c.phone,d=c.email,h=c.resumedownload;return Object(t.jsx)("section",{id:"about",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsx)("div",{className:"three columns",children:Object(t.jsx)("img",{className:"profile-pic",src:a,alt:"Sonny's Profile Pic"})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("h2",{children:"About Me"}),Object(t.jsx)("p",{children:n}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"columns contact-details",children:[Object(t.jsx)("h2",{children:"Contact Details"}),Object(t.jsxs)("p",{className:"address",children:[Object(t.jsx)("span",{children:s}),Object(t.jsx)("br",{}),Object(t.jsxs)("span",{children:[i,Object(t.jsx)("br",{}),l," ",r,", ",j]}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:o}),Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:d})]})]}),Object(t.jsx)("div",{className:"columns download",children:Object(t.jsx)("p",{children:Object(t.jsxs)("a",{href:h,className:"button",target:"_blank",children:[Object(t.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})},b=function(e){var c=e.data;if(c)var s=c.skillmessage,a=c.education.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.school}),Object(t.jsxs)("p",{className:"info",children:[e.degree," ",Object(t.jsx)("span",{children:"\u2022"}),Object(t.jsx)("em",{className:"date",children:e.graduated})]}),Object(t.jsx)("p",{children:e.description})]},e.school)})),n=c.work.map((function(e){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h3",{children:e.company}),Object(t.jsxs)("p",{className:"info",children:[e.title,Object(t.jsx)("span",{children:"\u2022"})," ",Object(t.jsx)("em",{className:"date",children:e.years})]}),Object(t.jsx)("p",{children:e.description})]},e.company)})),i=c.skills.map((function(e){var c="bar-expand "+e.name.toLowerCase();return Object(t.jsxs)("li",{children:[Object(t.jsx)("span",{style:{width:e.level},className:c}),Object(t.jsx)("em",{children:e.name})]},e.name)}));return Object(t.jsxs)("section",{id:"resume",children:[Object(t.jsxs)("div",{className:"row education",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Education"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:Object(t.jsx)("div",{className:"row item",children:Object(t.jsx)("div",{className:"twelve columns",children:a})})})]}),Object(t.jsxs)("div",{className:"row work",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Work"})})}),Object(t.jsx)("div",{className:"nine columns main-col",children:n})]}),Object(t.jsxs)("div",{className:"row skill",children:[Object(t.jsx)("div",{className:"three columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Skills"})})}),Object(t.jsxs)("div",{className:"nine columns main-col",children:[Object(t.jsx)("p",{children:s}),Object(t.jsx)("div",{className:"bars",children:Object(t.jsx)("ul",{className:"skills",children:i})})]})]})]})},m=function(e){var c=e.data,s=Object(a.useState)(""),n=Object(l.a)(s,2),i=n[0],r=n[1],j=Object(a.useState)(""),o=Object(l.a)(j,2),d=o[0],h=o[1],b=Object(a.useState)(""),m=Object(l.a)(b,2),O=m[0],x=m[1],u=Object(a.useState)(""),v=Object(l.a)(u,2),f=v[0],p=v[1];if(c)var N=c.name,g=c.address.street,w=c.address.city,k=c.address.state,y=c.address.zip,S=c.phone,C=c.email,E=c.contactmessage;var R=function(){window.open("mailto:".concat(C,"?subject=").concat(encodeURIComponent(O),"&body=").concat(encodeURIComponent(i)," (").concat(encodeURIComponent(d),"): ").concat(encodeURIComponent(f)))};return Object(t.jsxs)("section",{id:"contact",children:[Object(t.jsxs)("div",{className:"row section-head",children:[Object(t.jsx)("div",{className:"two columns header-col",children:Object(t.jsx)("h1",{children:Object(t.jsx)("span",{children:"Get In Touch."})})}),Object(t.jsx)("div",{className:"ten columns",children:Object(t.jsx)("p",{className:"lead",children:E})})]}),Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"eight columns",children:[Object(t.jsx)("form",{onSubmit:R,children:Object(t.jsxs)("fieldset",{children:[Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:i,size:"35",id:"contactName",name:"contactName",onChange:function(e){return r(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:d,size:"35",id:"contactEmail",name:"contactEmail",onChange:function(e){return h(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(t.jsx)("input",{type:"text",defaultValue:"",value:O,size:"35",id:"contactSubject",name:"contactSubject",onChange:function(e){return x(e.target.value)}})]}),Object(t.jsxs)("div",{children:[Object(t.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(t.jsx)("span",{className:"required",children:"*"})]}),Object(t.jsx)("textarea",{cols:"50",rows:"15",value:f,onChange:function(e){return p(e.target.value)},id:"contactMessage",name:"contactMessage"})]}),Object(t.jsx)("div",{children:Object(t.jsx)("button",{onClick:R,type:"submit",className:"submit",children:"Submit"})})]})}),Object(t.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(t.jsxs)("div",{id:"message-success",children:[Object(t.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(t.jsx)("br",{})]})]}),Object(t.jsx)("aside",{className:"four columns footer-widgets",children:Object(t.jsxs)("div",{className:"widget widget_contact",children:[Object(t.jsx)("h4",{children:"Address and Phone"}),Object(t.jsxs)("p",{className:"address",children:[N,Object(t.jsx)("br",{}),C,Object(t.jsx)("br",{}),Object(t.jsx)("br",{}),g," ",Object(t.jsx)("br",{}),w,", ",k," ",y,Object(t.jsx)("br",{}),Object(t.jsx)("span",{children:S})]})]})})]})]})},O=function(e){var c=e.data;if(c)var s=c.projects.map((function(e){var c="images/portfolio/"+e.image;return Object(t.jsx)("div",{className:"columns portfolio-item",children:Object(t.jsx)("div",{className:"item-wrap",children:Object(t.jsxs)("a",{href:e.url,title:e.title,children:[Object(t.jsx)("img",{alt:e.title,src:c}),Object(t.jsx)("div",{className:"overlay",children:Object(t.jsxs)("div",{className:"portfolio-item-meta",children:[Object(t.jsx)("h5",{children:e.title}),Object(t.jsx)("p",{children:e.category})]})}),Object(t.jsx)("div",{className:"link-icon",children:Object(t.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(t.jsx)("section",{id:"portfolio",children:Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"twelve columns collapsed",children:[Object(t.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(t.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:s})]})})})},x=(s(164),function(){var e=Object(a.useState)({}),c=Object(l.a)(e,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){fetch("/resumeData.json").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(o,{data:s.main}),Object(t.jsx)(h,{data:s.main}),Object(t.jsx)(b,{data:s.resume}),Object(t.jsx)(O,{data:s.portfolio}),Object(t.jsx)(m,{data:s.main}),Object(t.jsx)(d,{data:s.main})]})}),u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(t.jsx)(x,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");u?function(e){fetch(e).then((function(c){404===c.status||-1===c.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):v(e)}))}}()},94:function(e,c,s){}},[[165,1,2]]]);
//# sourceMappingURL=main.b3a207c4.chunk.js.map