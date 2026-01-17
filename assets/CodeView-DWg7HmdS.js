import{C as t}from"./CodeTemplate-BManvTv8.js";import{_ as o,c as r,r as c,o as a}from"./index-BdWR0EGn.js";const n={components:{CodeTemplate:t}};function d(s,p,i,m,l,u){const e=c("CodeTemplate");return a(),r(e,{technology:"JavaScript",list:["JavaScript is a programming language, that is responsible for the logic of web",`In fact almost everything, that moves on the Internet was made in JavaScript or one of it's "upgraded versions"`,"In this site JS is used to read data about products from the file and display it on the screen"],code:`const card_template = document.getElementById("card-template");
const container = document.getElementById("cards-container");

for (const product of products) {
  const card = card_template.content.cloneNode(true);

  card.querySelector(".card-header").textContent = product.name;
  card.querySelector(".card-price").textContent = product.price + "$";
  card.querySelector("img").src = "/img/products/" + product.img;

  container.appendChild(card);
}`})}const _=o(n,[["render",d]]);export{_ as default};
