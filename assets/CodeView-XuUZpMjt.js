import{C as t}from"./CodeTemplate-BdoPBxhc.js";import{_ as o,c as r,r as c,o as a}from"./index-C5Kn64Xm.js";const n={components:{CodeTemplate:t}};function i(d,p,l,m,s,u){const e=c("CodeTemplate");return a(),r(e,{technology:"TypeScript",list:["TypeScript is high-level programming language that introduces type checks into JavaScript",`Basically it's "JavaScript+" that politely tries to protect you from your own variables, which due to their ability to change type on the go can make the code nearly imposible to maintain`],code:`const card_template:HTMLTemplateElement | null = document.getElementById("card-template") as HTMLTemplateElement;
const container:HTMLElement | null = document.getElementById("cards-container");

if (card_template && container) {
  for (const product of products) {
    const card = card_template.content.cloneNode(true) as DocumentFragment;

    if(card.querySelector(".card-header")) card.querySelector(".card-header")!.textContent = product.name;
    if(card.querySelector(".card-price")) card.querySelector(".card-price")!.textContent = product.price + "$";
    if(card.querySelector("img")) card.querySelector("img")!.src = "/img/products/" + product.img;

    container.appendChild(card);
  }
}`})}const g=o(n,[["render",i]]);export{g as default};
