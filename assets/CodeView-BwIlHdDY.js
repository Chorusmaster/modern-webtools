const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeTemplate-CUxhVtDI.js","assets/vendor-BSRx87Xs.js","assets/vendor-D0skQn8-.css","assets/index-DX1Z0aDf.js","assets/index-CHaZ3HCF.css","assets/CodeTemplate-BbHZRz8q.css"])))=>i.map(i=>d[i]);
import{_ as t,a as o}from"./index-DX1Z0aDf.js";import{b as r,r as a,o as c}from"./vendor-BSRx87Xs.js";const n=()=>t(()=>import("./CodeTemplate-CUxhVtDI.js"),__vite__mapDeps([0,1,2,3,4,5])),d={components:{CodeTemplate:n}};function s(i,p,m,l,u,_){const e=a("CodeTemplate");return c(),r(e,{technology:"JavaScript",list:["JavaScript is a programming language, that is responsible for the logic of web",`In fact almost everything, that moves on the Internet was made in JavaScript or one of it's "upgraded versions"`,"In this site JS is used to read data about products from the file and display it on the screen"],code:`const card_template = document.getElementById("card-template");
const container = document.getElementById("cards-container");

for (const product of products) {
  const card = card_template.content.cloneNode(true);

  card.querySelector(".card-header").textContent = product.name;
  card.querySelector(".card-price").textContent = product.price + "$";
  card.querySelector("img").src = "/img/products/" + product.img;

  container.appendChild(card);
}`})}const h=o(d,[["render",s]]);export{h as default};
