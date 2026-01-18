const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeTemplate-CUxhVtDI.js","assets/vendor-BSRx87Xs.js","assets/vendor-D0skQn8-.css","assets/index-DX1Z0aDf.js","assets/index-CHaZ3HCF.css","assets/CodeTemplate-BbHZRz8q.css"])))=>i.map(i=>d[i]);
import{_ as t,a as o}from"./index-DX1Z0aDf.js";import{b as r,r as s,o as n}from"./vendor-BSRx87Xs.js";const a=()=>t(()=>import("./CodeTemplate-CUxhVtDI.js"),__vite__mapDeps([0,1,2,3,4,5])),i={components:{CodeTemplate:a}};function c(d,p,m,l,u,v){const e=s("CodeTemplate");return n(),r(e,{technology:"Vue",list:["Vue.js is a progressive JavaScript frontend framework","It has many benefits, such as modularity and structurization for project, optimisation, client-side rendering and much more","Above that Vue have big ecosystem with many other useful tools for web development"],code:`<div class="bg-[#222121]! m-4! w-70! min-w-70! transition-transform! duration-300! hover:scale-103! shrink-0!"
  v-for="(product, index) in products"
  :key="index">
  <img class="w-full! h-52! object-cover!"
       :src="\`/img/products/\${product.img}\`">
  <div class="d-flex items-end! justify-between! p-2!">
    <div class="p-3!">
      <div class="card-header text-xl!">{{ product.name }}</div>
      <div class="card-price text-base! text-[#AAAAAA]!">{{ product.price }}$</div>
    </div>
    <button class="w-16! h-10! text-sm! bg-transparent! hover:bg-[#4de6000e]! border-none! rounded text-[#4DE600]!">
      BUY
    </button>
  </div>
</div>`})}const h=o(i,[["render",c]]);export{h as default};
