import{C as t}from"./CodeTemplate-d_ZynusU.js";import{_ as o,c,r as a,o as s}from"./index-dzxakXn9.js";const n={components:{CodeTemplate:t}};function i(r,l,d,m,p,v){const e=a("CodeTemplate");return s(),c(e,{technology:"Vuetify",list:["Vuetify is a component library for Vue","It allows to make fascinating webs even faster than with only Vue","Also it provides a lot of well-made animations"],code:`<v-col
  v-for="(item, index) in products"
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
      :src="\`/img/products/\${item.img}\`"
      cover
    />

    <v-card-title class="pb-0 pt-4">
      {{ item.name }}
    </v-card-title>

    <div class="d-flex justify-space-between">
      <v-container class="text-secondary pt-2">
        {{ item.price }} $
      </v-container>

      <v-card-actions class="pt-0">
        <v-btn
          color="accent"
        />
          Cancel
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</v-col>`})}const _=o(n,[["render",i]]);export{_ as default};
