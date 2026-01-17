<template>
  <CodeTemplate 
  technology="Pinia" 
  :list="[
    'Pinia is a library for Vue that provides centralized storage for all app',
    'With Pinia shop can share data across pages until website is not reloaded',
  ]"
  :code="String.raw`<v-col
  v-for=&quot;(item, index) in basketStore.basket&quot;
  :key=&quot;index&quot;
  cols=&quot;auto&quot;
>
  <v-card
    class=&quot;ma-4 bg-surface&quot;
    max-width=&quot;344&quot;
    min-width=&quot;300&quot;
  >
    <img
      class=&quot;w-100 h-52 object-cover&quot;
      :src=&quot;\`/img/products/\${item.product.img}\`&quot;
      cover
    />

    <v-card-title class=&quot;pb-0 pt-4&quot;>
      {{ item.product.name }}
    </v-card-title>

    <div class=&quot;d-flex justify-space-between&quot;>
      <v-container class=&quot;text-secondary pt-2&quot;>
        {{ item.product.price }} $
        <span class=&quot;pl-6&quot;>{{ item.quantity }}x</span>
      </v-container>

      <v-card-actions class=&quot;pt-0&quot;>
        <v-btn
          color=&quot;accent&quot;
          text=&quot;Cancel&quot;
          @click=&quot;basketStore.removeItem(index)&quot;
        />
      </v-card-actions>
    </div>
  </v-card>
</v-col>`"
  >
  </CodeTemplate>
</template>

<script lang="ts">
  import CodeTemplate from '@/components/CodeTemplate.vue';

  export default {
    components: {
      CodeTemplate
    }
  }
</script>