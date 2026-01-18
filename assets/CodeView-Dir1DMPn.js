const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeTemplate-CUxhVtDI.js","assets/vendor-BSRx87Xs.js","assets/vendor-D0skQn8-.css","assets/index-DX1Z0aDf.js","assets/index-CHaZ3HCF.css","assets/CodeTemplate-BbHZRz8q.css"])))=>i.map(i=>d[i]);
import{_ as t,a as o}from"./index-DX1Z0aDf.js";import{b as r,r as c,o as a}from"./vendor-BSRx87Xs.js";const n=()=>t(()=>import("./CodeTemplate-CUxhVtDI.js"),__vite__mapDeps([0,1,2,3,4,5])),i={components:{CodeTemplate:n}};function d(p,l,m,s,u,_){const e=c("CodeTemplate");return a(),r(e,{technology:"TypeScript",list:["TypeScript is high-level programming language that introduces type checks into JavaScript",`Basically it's "JavaScript+" that politely tries to protect you from your own variables, which due to their ability to change type on the go can make the code nearly imposible to maintain`],code:`const card_template:HTMLTemplateElement | null = document.getElementById("card-template") as HTMLTemplateElement;
const container:HTMLElement | null = document.getElementById("cards-container");

if (card_template && container) {
  for (const product of products) {
    const card = card_template.content.cloneNode(true) as DocumentFragment;

    if(card.querySelector(".card-header")) card.querySelector(".card-header")!.textContent = product.name;
    if(card.querySelector(".card-price")) card.querySelector(".card-price")!.textContent = product.price + "$";
    if(card.querySelector("img")) card.querySelector("img")!.src = "/img/products/" + product.img;

    container.appendChild(card);
  }
}`})}const g=o(i,[["render",d]]);export{g as default};
