const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeTemplate-CUxhVtDI.js","assets/vendor-BSRx87Xs.js","assets/vendor-D0skQn8-.css","assets/index-DX1Z0aDf.js","assets/index-CHaZ3HCF.css","assets/CodeTemplate-BbHZRz8q.css"])))=>i.map(i=>d[i]);
import{_ as t,a}from"./index-DX1Z0aDf.js";import{b as o,r as c,o as s}from"./vendor-BSRx87Xs.js";const r=()=>t(()=>import("./CodeTemplate-CUxhVtDI.js"),__vite__mapDeps([0,1,2,3,4,5])),i={components:{CodeTemplate:r}};function n(d,p,l,m,v,_){const e=c("CodeTemplate");return s(),o(e,{technology:"Pinia",list:["Pinia is a library for Vue that provides centralized storage for all app","With Pinia shop can share data across pages until web is not reloaded"],code:`<v-col
  v-for="(item, index) in basketStore.basket"
  :key="index"
  cols="auto"
>
  <v-card
    class="ma-4 bg-surface"
    max-width="344"
    min-width="300"
  >
    <img
      class="w-100 h-52 object-cover"
      :src="\`/img/products/\${item.product.img}\`"
      cover
    />

    <v-card-title class="pb-0 pt-4">
      {{ item.product.name }}
    </v-card-title>

    <div class="d-flex justify-space-between">
      <v-container class="text-secondary pt-2">
        {{ item.product.price }} $
        <span class="pl-6">{{ item.quantity }}x</span>
      </v-container>

      <v-card-actions class="pt-0">
        <v-btn
          color="accent"
          text="Cancel"
          @click="basketStore.removeItem(index)"
        />
      </v-card-actions>
    </div>
  </v-card>
</v-col>`})}const b=a(i,[["render",n]]);export{b as default};
