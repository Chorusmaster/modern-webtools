import{C as t}from"./CodeTemplate-Bf3dICHG.js";import{_ as o,c as s,r,o as n}from"./index-sDL_8D4I.js";const a={components:{CodeTemplate:t}};function i(c,d,p,m,l,u){const e=r("CodeTemplate");return n(),s(e,{technology:"Vue",list:["Vue.js is a progressive JavaScript frontend framework","It has many benefits, such as modularity and structurization for project, optimisation, client-side rendering and much more","Above that Vue have big ecosystem with many other useful tools for web development"],code:`<div class="bg-[#222121]! m-4! w-70! min-w-70! transition-transform! duration-300! hover:scale-103! shrink-0!"
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
</div>`})}const h=o(a,[["render",i]]);export{h as default};
