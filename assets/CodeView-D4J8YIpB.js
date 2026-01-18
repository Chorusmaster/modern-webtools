import{C as t}from"./CodeTemplate-Boas5zVe.js";import{_ as o,c as a,r as c,o as s}from"./index-ZiKQSoAr.js";const r={components:{CodeTemplate:t}};function n(i,d,p,l,m,v){const e=c("CodeTemplate");return s(),a(e,{technology:"Axios",list:["Axios is a library for Vue that is used for making http requests","With Axios you can connect to backend and therefore store data","In this project Axios is used to save basket even when the page was reloaded"],code:`<v-col
  v-for="(item, index) in basketStore.backendBasket"
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
</v-col>`})}const f=o(r,[["render",n]]);export{f as default};
