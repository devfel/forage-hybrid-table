(this["webpackJsonpforage-hybrid-table"]=this["webpackJsonpforage-hybrid-table"]||[]).push([[0],{707:function(e,n,t){"use strict";t.r(n);var r,a,i,l,c=t(0),s=t.n(c),o=t(21),d=t.n(o),u=t(32),b=t(322),f=t.n(b),m=t(420),j=t(328),h=t(405),g=t(79),p=t(80),x=p.b.div(r||(r=Object(g.a)(['\n  //Fix Display Here\n  /* max-width: 1120px;\n  height: 230px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly; */\n  \n  .custom-filters {\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n  }\n\n  .custom-filter-item {\n    display: flex;\n    align-items: center;\n    margin: 0.2rem 0rem;\n  }\n\n  .custom-filter-item:last-child{\n    margin-bottom: 2rem;\n  }\n\n  .custom-filter-item p{\n    width: 150px;\n  }\n\n  .custom-filter-item .select-filter{\n    background-color: #e0e0e0;\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    width: 180px;\n  }\n\n  .show-filter-select-box {\n    margin: 0.5rem 0rem;\n    width: 170px;\n  }\n\n  table {\n    width: 100%;\n\n    th {\n      color: var(--text-title);\n      padding: 1rem 0rem;\n      text-align: center;\n      line-height: 1rem;\n      font-weight: 600;\n    }\n\n    td {\n      text-align: center;\n    }\n  }\n\n  button {\n    margin: 0.5rem;\n    font-weight: 600;\n    font-family: "Poppins", sans-serif;\n    color: #000;\n  }\n\n  button.selected {\n    margin: 0.5rem;\n    font-weight: 600;\n    font-family: "Poppins", sans-serif;\n    color: #fff;\n    background-color: var(--green);\n  }\n\n  button.selected {\n    margin: 0.5rem;\n    font-weight: 600;\n    font-family: "Poppins", sans-serif;\n    color: #fff;\n    background-color: var(--green);\n  }\n\n  button.tutorial-button{\n    margin-left: 2rem;\n    background-color: var(--orange);\n  }\n  \n  .tutorial-button a{\n    color: #fafafa;\n    text-decoration: none;\n  }\n\n  .tutorial-button:hover{\n    background-color: var(--orange-dark);\n  }\n\n  .chart-title {\n    text-align: center;\n    font-size: 1.25rem;\n    font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n    font-weight: 500;\n    line-height: 1.6;\n    letter-spacing: 0.0075em;\n    padding: 0.6rem 0 0.6rem 0;\n  }\n\n  .chart-sub-title {\n    text-align: center;\n    background-color: var(--orange);\n    padding: 0.6rem 0 0.6rem 0;\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n\n  .chart-container {\n    margin: auto;\n  }\n\n  .chart-box {\n    border: 0;\n\t  border-radius: 2px;\n\t  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n\n  .top-characteristic {\n    color: var(--green);\n    font-weight: bold;\n    font-size: 0.9rem;\n  }\n\n']))),O=t(739),y=t(743),v=t(266),k=t(488),N=t(489),w=t(202),S=t(199),F=t(491),C=p.b.header(a||(a=Object(g.a)(["\n  \n"]))),A=p.b.div(i||(i=Object(g.a)(["\n  .footer {\n    display: grid;\n    grid-template-columns: 1fr;\n    margin: 1rem;\n  }\n"]))),D=t(7);function z(){return Object(D.jsx)(C,{children:Object(D.jsx)(A,{children:Object(D.jsxs)("div",{className:"footer",children:[Object(D.jsx)("span",{children:"All the information were gathered from the University of Florida Corn Silage and Forage Field Day WebSite."}),Object(D.jsxs)("span",{children:["Visit the"," ",Object(D.jsx)("b",{children:Object(D.jsxs)("a",{href:"https://programs.ifas.ufl.edu/forage/",target:"_blank",rel:"noopener noreferrer",children:[" ","UF/IFAS Forage Team",""]})})," and the ",Object(D.jsx)("b",{children:Object(D.jsxs)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:["","Corn Silage and Forage Field Day",""]})})," ","for more information."]}),Object(D.jsxs)("span",{children:["Contact your ",Object(D.jsx)("b",{children:Object(D.jsx)("a",{href:"https://directory.ifas.ufl.edu/extprogram?pageID=3&p=BB",target:"_blank",rel:"noopener noreferrer",children:"Local Extension Agent"})})," or reach out to us through ",Object(D.jsx)("b",{children:Object(D.jsx)("a",{href:"mailto: forages@ifas.ufl.edu",children:"forages@ifas.ufl.edu"})}),"."]})]})})})}function T(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),l=i[0],s=(i[1],Object(c.useState)([])),o=Object(u.a)(s,2),d=(o[0],o[1],Object(c.useState)([])),b=Object(u.a)(d,2),g=(b[0],b[1],Object(c.useState)([])),p=Object(u.a)(g,2),C=(p[0],p[1],Object(c.useState)([])),A=Object(u.a)(C,2),T=(A[0],A[1],Object(c.useState)("table2020")),I=Object(u.a)(T,2),M=I[0],P=I[1],E=function(){var e=Object(c.useState)([0,0]),n=Object(u.a)(e,2),t=n[0],r=n[1];return Object(c.useLayoutEffect)((function(){function e(){r([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}()[0],H=E>1120?1090:E-30,L=H<600?300:H/2,Y=Object(c.useState)([]),U=Object(u.a)(Y,2),B=U[0],_=U[1],W=Object(c.useState)("all"),K=Object(u.a)(W,2),R=K[0],V=K[1],J=Object(c.useState)("all"),X=Object(u.a)(J,2),q=X[0],G=X[1],Q=Object(c.useState)("Corn"),Z=Object(u.a)(Q,2),$=Z[0],ee=Z[1],ne=Object(c.useState)("all"),te=Object(u.a)(ne,2),re=te[0],ae=te[1];Object(c.useEffect)((function(){var e,n=function(e){return"all"===re?e:e.filter((function(e){return e.season===re}))}(function(e){return"all"===$?e:e.filter((function(e){return e.species===$}))}(function(e){return"all"===q?e:e.filter((function(e){return e.company===q}))}((e=t,"all"===R?e:e.filter((function(e){return e.year===Number(R)}))))));_(n)}),[R,q,$,re]),Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/devfel/forage-hybrid-table/master/src/data/data.json").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{year:e.year,species:e.species,company:e.company,hybrid:e.hybrid,companyhybrid:e.company+" / "+e.hybrid,season:e.season,relativematurity:null===e.relativematurity||""===e.relativematurity?-1:Number(e.relativematurity),topyield:e.topyield,yield:null===e.yield||""===e.yield?-1:Number(e.yield),at35dm:null===e.at35dm||""===e.at35dm?-1:Number(e.at35dm),topmilksilage:e.topmilksilage,milksilage:null===e.milksilage||""===e.milksilage?-1:Number(e.milksilage),topmilkacre:e.topmilkacre,milkacre:null===e.milkacre||""===e.milkacre?-1:Number(e.milkacre),drymatter:null===e.drymatter||""===e.drymatter?-1:Number(e.drymatter),crudeprotein:null===e.crudeprotein||""===e.crudeprotein?-1:Number(e.crudeprotein),ndf:null===e.ndf||""===e.ndf?-1:Number(e.ndf),ndfd:null===e.ndfd||""===e.ndfd?-1:Number(e.ndfd),at240undf:null===e.at240undf||""===e.at240undf?-1:Number(e.at240undf),adf:null===e.adf||""===e.adf?-1:Number(e.adf),starch:null===e.starch||""===e.starch?-1:Number(e.starch),sugar:null===e.sugar||""===e.sugar?-1:Number(e.sugar),nel:null===e.nel||""===e.nel?-1:Number(e.nel),ivdmd:null===e.ivdmd||""===e.ivdmd?-1:Number(e.ivdmd),tdn:null===e.tdn||""===e.tdn?-1:Number(e.tdn),yielddigestiblendf:null===e.yielddigestiblendf||""===e.yielddigestiblendf?-1:Number(e.yielddigestiblendf),diseasedonotuse:null===e.diseasedonotuse||""===e.diseasedonotuse?-1:Number(e.diseasedonotuse),disease:null===e.disease||""===e.disease?-1:Number(e.disease),donotuselodging:null===e.donotuselodging||""===e.donotuselodging?-1:Number(e.donotuselodging),lodging:null===e.lodging||""===e.lodging?-1:Number(e.lodging),active:e.active}})).filter((function(e){return 1===e.active}));return _(n),r(n),V("2021"),ee("Corn"),r(n)}))}),[]);var ie=[{title:"Year",field:"year"},{title:"Company",field:"company"},{title:"Hybrid",field:"hybrid"},{title:"Season",field:"season"},{title:"Yield Dry Tons/acre",field:"yield",defaultSort:"desc",render:function(e){return Object(D.jsx)("div",{className:"*"===e.topyield?"top-characteristic":"",children:-1!==e.yield?e.yield:"n/a"})}},{title:"Milk lb/Ton of silage",field:"milksilage",render:function(e){return Object(D.jsx)("div",{className:"*"===e.topmilksilage?"top-characteristic":"",children:-1!==e.milksilage?e.milksilage:"n/a"})}},{title:"Milk lb/acre",field:"milkacre",render:function(e){return Object(D.jsx)("div",{className:"*"===e.topmilkacre?"top-characteristic":"",children:-1!==e.milkacre?e.milkacre:"n/a"})}},{title:"NDF %",field:"ndf",render:function(e){return Object(D.jsx)("div",{children:-1!==e.ndf?e.ndf:"n/a"})}},{title:"NDFD %",field:"ndfd",render:function(e){return Object(D.jsx)("div",{children:-1!==e.ndfd?e.ndfd:"n/a"})}},{title:"Starch %",field:"starch",render:function(e){return Object(D.jsx)("div",{children:-1!==e.starch?e.starch:"n/a"})}}],le=function(){P("chart2020")},ce=function(){P("table2020")},se=t.map((function(e){return e.year})),oe=Array.from(new Set(se)).sort().reverse(),de=t.map((function(e){return e.company})),ue=Array.from(new Set(de)).sort(),be=t.map((function(e){return e.species})),fe=Array.from(new Set(be)).sort(),me=t.map((function(e){return e.season})),je=Array.from(new Set(me)).sort();return"table2020"===M?Object(D.jsxs)(x,{children:[Object(D.jsx)(m.a,{onClick:ce,variant:"contained",className:"selected",children:"Table"}),Object(D.jsx)(m.a,{onClick:le,variant:"contained",children:"Chart"}),Object(D.jsx)(m.a,{className:"tutorial-button",variant:"contained",children:Object(D.jsx)("a",{href:"#",children:"Tutorial"})}),Object(D.jsx)("div",{className:"show-filter-select-box",children:Object(D.jsxs)("p",{style:{fontSize:"1rem"},children:[" ",Object(D.jsx)("b",{children:"Available Filters"})," "]})}),Object(D.jsxs)("div",{className:"custom-filters",children:[Object(D.jsxs)("div",{className:"custom-species-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Species:"}),Object(D.jsx)(j.a,{className:"select-filter",labelId:"filter-species-label",id:"filter-species-id",value:$,label:"Species",onChange:function(e){return ee(e.target.value)},children:fe.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))})]}),Object(D.jsxs)("div",{className:"custom-year-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Year:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-year-label",id:"filter-year-id",value:R,label:"Year",onChange:function(e){return V(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),oe.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]}),Object(D.jsxs)("div",{className:"custom-season-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Season:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-season-label",id:"filter-season-id",value:re,label:"Season",onChange:function(e){return ae(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),je.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]}),Object(D.jsxs)("div",{className:"custom-company-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Company:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-company-label",id:"filter-company-id",value:q,label:"Company",onChange:function(e){return G(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),ue.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]})]}),Object(D.jsx)(f.a,{icons:{Filter:function(){return Object(D.jsx)("div",{})}},columns:ie,data:B,options:{filtering:l,emptyRowsWhenPaging:!1,pageSize:10,pageSizeOptions:[10,20,50,100],exportButton:!0,exportAllData:!0,padding:"dense",tableLayout:"auto",headerStyle:{backgroundColor:"#FA4616",color:"#fefefe"},rowStyle:function(e,n,t){return n%2==0?{backgroundColor:"#f8f8f8",fontSize:"85%"}:{backgroundColor:"#fdfdfd",fontSize:"85%"}},searchFieldVariant:"outlined"},detailPanel:[{tooltip:"Show Details",render:function(e){return Object(D.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem",fontSize:"1rem",padding:"1rem",textAlign:"center",color:"white",backgroundColor:"#0021A5"},children:[Object(D.jsxs)("p",{children:["Relative Maturity: ",-1!==e.relativematurity?e.relativematurity:"n/a"]}),Object(D.jsxs)("p",{children:["35% DM T/A: ",-1!==e.at35dm?e.at35dm:"n/a"]}),Object(D.jsxs)("p",{children:["Dry matter %: ",-1!==e.drymatter?e.drymatter:"n/a"]}),Object(D.jsxs)("p",{children:["Crude protein %: ",-1!==e.crudeprotein?e.crudeprotein:"n/a"]}),Object(D.jsxs)("p",{children:["240 UNDF: ",-1!==e.at240undf?e.at240undf:"n/a"]}),Object(D.jsxs)("p",{children:["ADF %: ",-1!==e.adf?e.adf:"n/a"]}),Object(D.jsxs)("p",{children:["Sugar %: ",-1!==e.sugar?e.sugar:"n/a"]}),Object(D.jsxs)("p",{children:["NEL Mcal/lb: ",-1!==e.nel?e.nel:"n/a"]}),Object(D.jsxs)("p",{children:["IVDMD %: ",-1!==e.ivdmd?e.ivdmd:"n/a"]}),Object(D.jsxs)("p",{children:["TDN %: ",-1!==e.tdn?e.tdn:"n/a"]}),Object(D.jsxs)("p",{children:["Yield digestible NDF, T/A: ",-1!==e.yielddigestiblendf?e.yielddigestiblendf:"n/a"]}),Object(D.jsxs)("p",{children:["Disease %: ",-1!==e.disease?e.disease:"n/a"]}),Object(D.jsxs)("p",{children:["Lodging %: ",-1!==e.lodging?e.lodging:"n/a"]})]})}}],title:"UF Silage Hybrid Trial Table"}),Object(D.jsx)("span",{style:{color:"darkblue",fontWeight:"bold",margin:"1rem"},children:"Blue and bold characteristics in the table mean it was a top performer within that season and year."}),Object(D.jsx)("br",{}),Object(D.jsx)(z,{})]}):Object(D.jsxs)(x,{children:[Object(D.jsx)(m.a,{onClick:ce,variant:"contained",children:"Table"}),Object(D.jsx)(m.a,{onClick:le,variant:"contained",className:"selected",children:"Chart"}),Object(D.jsx)(m.a,{className:"tutorial-button",variant:"contained",children:Object(D.jsx)("a",{href:"#",children:"Tutorial"})}),Object(D.jsx)("div",{className:"show-filter-select-box",children:Object(D.jsxs)("p",{style:{fontSize:"1rem"},children:[" ",Object(D.jsx)("b",{children:"Available Filters"})," "]})}),Object(D.jsxs)("div",{className:"custom-filters",children:[Object(D.jsxs)("div",{className:"custom-species-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Species:"}),Object(D.jsx)(j.a,{className:"select-filter",labelId:"filter-species-label",id:"filter-species-id",value:$,label:"Species",onChange:function(e){return ee(e.target.value)},children:fe.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))})]}),Object(D.jsxs)("div",{className:"custom-year-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Year:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-year-label",id:"filter-year-id",value:R,label:"Year",onChange:function(e){return V(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),oe.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]}),Object(D.jsxs)("div",{className:"custom-season-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Season:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-season-label",id:"filter-season-id",value:re,label:"Season",onChange:function(e){return ae(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),je.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]}),Object(D.jsxs)("div",{className:"custom-company-filter custom-filter-item",children:[Object(D.jsx)("p",{children:"Filter by Company:"}),Object(D.jsxs)(j.a,{className:"select-filter",labelId:"filter-company-label",id:"filter-company-id",value:q,label:"Company",onChange:function(e){return G(e.target.value)},children:[Object(D.jsx)(h.a,{value:"all",children:Object(D.jsx)("em",{children:"All"})}),ue.map((function(e){return Object(D.jsx)(h.a,{value:e,children:e})}))]})]})]}),Object(D.jsxs)("div",{className:"chart-box",children:[Object(D.jsx)("div",{className:"chart-title",children:"UF Silage Hybrid Trial Chart"}),Object(D.jsx)("div",{className:"chart-sub-title",style:{color:"#FAFAFA"},children:"Yield Dry Matter (DM tons/acre) X Milk Production (lb milk/ton) "}),Object(D.jsxs)(O.a,{className:"chart-container",width:H,height:L,margin:{top:20,right:30,bottom:10,left:0},children:[Object(D.jsx)(y.a,{strokeDasharray:"1 1"}),Object(D.jsx)(v.a,{dataKey:"companyhybrid",name:"Company/Hybrid",unit:""}),Object(D.jsx)(k.a,{tickCount:4,dataKey:"yield",type:"number",domain:[1,16],name:"Total Production",unit:" lb DM/A"}),Object(D.jsx)(N.a,{interval:0,tickCount:4,dataKey:"milksilage",type:"number",domain:[1400,4100],name:"Milk Production",unit:" mk/ton"}),Object(D.jsx)(w.a,{cursor:{strokeDasharray:"10 10"}}),Object(D.jsx)(S.a,{}),Object(D.jsx)(F.a,{name:$,data:B,fill:"#22884C"})]})]}),Object(D.jsx)(z,{})]})}var I=p.b.main(l||(l=Object(g.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n  background-color: #fff;\n"])));function M(){return Object(D.jsx)(I,{children:Object(D.jsx)(T,{})})}var P,E,H,L=t.p+"static/media/logo-uf-ifas.4f5deef3.png",Y=t.p+"static/media/background.08602167.jpg",U=p.b.header(P||(P=Object(g.a)(["\n  background: var(--dark-green);\n"]))),B=p.b.div(E||(E=Object(g.a)(["\n  max-width: 1280px;\n  height: 230px;\n  margin: 0 auto;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n\n  background-image: url(",");\n\n  img {\n    opacity: 0.95;\n    width: 160px;\n    height: auto;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    border-radius: 0.4rem;\n    background-color: #fefefe;\n\n    transition: filter 0.4s;\n    &:hover {\n      filter: brightness(1.1);\n    }\n  }\n\n  button {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n    background-color: #fefefe;\n    opacity: 0.9;\n\n    border: 0;\n    padding: 1rem 2rem;\n    border-radius: 0.4rem;\n\n    transition: filter 0.2s;\n    &:hover {\n      filter: brightness(1.2);\n    }\n  }\n"])),Y);function _(){return Object(D.jsx)(U,{children:Object(D.jsxs)(B,{children:[Object(D.jsx)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:Object(D.jsx)("img",{src:L,alt:"CSFD Logo"})}),Object(D.jsx)("button",{type:"button",children:Object(D.jsx)("a",{href:"https://animal.ifas.ufl.edu/extension/courses/csfd/",target:"_blank",rel:"noopener noreferrer",children:"UF Silage Hybrid Decision Tool"})})]})})}var W=Object(p.a)(H||(H=Object(g.a)(['\n:root {\n    --red: #e52e4d;\n    --blue: #5429cc;\n    --green: #0021A5;\n    --orange: #fa4616;\n    --orange-dark: #fa1616;\n\n    --dark-green: #0021A5;\n    --light-green: #d2f8d2;\n\n    --blue-light: #6933ff;\n\n    --text-title: #363f5f;\n    --text-body: #969cb3;\n\n    --background: #f0f2f5;\n    --shape: #FFFFFF;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    // default font-size (6.25% per pixel)\n    font-size: 87.5%; //14px\n\n    @media (max-width: 1080px) {\n        font-size: 75%; //13px\n    }\n\n    @media (max-width: 768px) {\n        font-size: 62.5%; //12px\n    }\n}\n\nbody {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n}\n\nbody, input, textarea, button {\n    font-family: "Poppins", sans-serif;\n    font-weight: 400;\n}\n\nh1, h2, h3, h4, h5, h6, strong, th {\n    font-family: "Poppins", sans-serif;\n    font-weight: 600;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n'])));function K(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(W,{}),Object(D.jsx)(_,{}),Object(D.jsx)(M,{})]})}d.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(K,{})}),document.getElementById("root"))}},[[707,1,2]]]);
//# sourceMappingURL=main.91ca5de4.chunk.js.map