import{C as t}from"./CodeTemplate-oNUV9FYv.js";import{_ as a,c as o,r as c,o as s}from"./index-moRo84P5.js";const r={components:{CodeTemplate:t}};function i(n,d,p,l,m,v){const e=c("CodeTemplate");return s(),o(e,{technology:"Pinia",list:["Pinia is a library for Vue that provides centralized storage for all app","With Pinia shop can share data across pages until web is not reloaded"],code:`<v-col
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
</v-col>`})}const x=a(r,[["render",i]]);export{x as default};
