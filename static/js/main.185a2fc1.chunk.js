(this["webpackJsonpcode-challenge"]=this["webpackJsonpcode-challenge"]||[]).push([[0],{32:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(3),a=n(22),r=n.n(a),i=n(25),o=n(13),d=(n(31),n(32),n(23)),l=n(18);n(36);l.a.initializeApp({apiKey:"AIzaSyA_A-4d8MK1APRZ_4RJ5kteo2D7J32i8yg",authDomain:"code-challenge-ea6ae.firebaseapp.com",projectId:"code-challenge-ea6ae",storageBucket:"code-challenge-ea6ae.appspot.com",messagingSenderId:"539763191064",appId:"1:539763191064:web:553bbde88dad9e76cc426d"});var j=l.a.firestore().collection("Payments"),b=function(e){return""==e.end?j.orderBy("Payee.SubmissionDate","desc").limit(4):"next"==e.direction?j.orderBy("Payee.SubmissionDate","desc").limit(4).startAfter(e.end):j.orderBy("Payee.SubmissionDate","desc").limitToLast(4).endBefore(e.start)},h=function(e){var t=e.payee,n=e.payment;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:t.Attention}),Object(c.jsxs)("p",{children:["Phone: ",t.Phone]}),Object(c.jsxs)("p",{children:["Fax: ",t.Fax]}),Object(c.jsxs)("p",{className:"text-secondary",children:[t.Address.Address1," ",t.Address.Address2,t.Address.City,", ",t.Address.StateOrProvince," ",t.Address.PostalCode," ",t.Address.Country]}),Object(c.jsxs)("p",{className:"text-secondary",children:["PAN: ",n.PAN," "]}),Object(c.jsxs)("p",{className:"text-secondary",children:["Exp: ",n.Exp," "]}),Object(c.jsxs)("p",{className:"text-secondary",children:["CVV: ",n.CVV," "]})]})},x=function(e){var t=e.remittance;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:t.PayorName}),Object(c.jsxs)("p",{children:["PayorId: ",t.PayorId]}),Object(c.jsxs)("p",{children:["InvoiceNo: ",t.InvoiceNo]}),Object(c.jsxs)("p",{className:"text-secondary",children:["Amount: ",t.Amount]})]})},m=function(e){var t=e.data;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("td",{children:Object(c.jsx)(h,{payee:t.Payee,payment:t.Payment})}),Object(c.jsx)("td",{children:Object(c.jsx)("div",{className:"row",children:t.Remittance.map((function(e,t){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)(x,{remittance:e})},t)}))})})]})},p=function(){return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Payee"}),Object(c.jsx)("th",{scope:"col",children:"Remittance"})]})})},u=function(e){var t=Object(d.a)(b(e.page)),n=Object(o.a)(t,3),s=n[0],a=n[1],r=n[2],i=e.page.firstSeen;function l(t){e.onClick({firstSeen:i,start:s.docs[0].data().Payee.SubmissionDate,end:s.docs[s.size-1].data().Payee.SubmissionDate,direction:t.target.value})}return""!==e.page.firstSeen||a||(i=s.docs[0].data().Payee.SubmissionDate),Object(c.jsxs)("div",{className:"container",children:[r&&Object(c.jsxs)("strong",{children:["Error: ",JSON.stringify(r)]}),a&&Object(c.jsx)("span",{children:"Collection: Loading..."}),Object(c.jsxs)("table",{className:"table text-left",style:{fontSize:"12px"},children:[Object(c.jsx)(p,{}),Object(c.jsx)("tbody",{children:!a&&s&&s.docs.map((function(e,t){return Object(c.jsx)("tr",{children:Object(c.jsx)(m,{data:e.data()})},t)}))})]}),!a&&e.page.firstSeen>s.docs[0].data().Payee.SubmissionDate&&Object(c.jsx)("button",{className:"btn btn-primary",style:{float:"left"},value:"prev",onClick:l,children:"Previous"}),!a&&4===s.size&&Object(c.jsx)("button",{className:"btn btn-primary",style:{float:"right"},value:"next",onClick:l,children:"Next"})]})};var O=function(){var e=Object(s.useState)({firstSeen:"",start:"",end:"",direction:"next"}),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Paymerang Code Challenge"}),Object(c.jsx)("a",{href:"https://github.com/JasonDominguez/code-challenge",children:"Back to Repo"}),Object(c.jsx)(u,{page:n,onClick:function(e){a({firstSeen:e.firstSeen,start:e.start,end:e.end,direction:e.direction})}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(c.jsx)(i.a,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.185a2fc1.chunk.js.map