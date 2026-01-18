<template>
  <CodeTemplate 
  technology="Vuetify" 
  :list="[
    'Vuetify is a component library for Vue',
    'It allows to make fascinating webs even faster than with only Vue',
    'Also it provides a lot of well-made animations',
  ]"
  :code="`<v-col
  v-for=&quot;(item, index) in products&quot;
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
      :src=&quot;\`/img/products/\${item.img}\`&quot;
      cover
    />

    <v-card-title class=&quot;pb-0 pt-4&quot;>
      {{ item.name }}
    </v-card-title>

    <div class=&quot;d-flex justify-space-between&quot;>
      <v-container class=&quot;text-secondary pt-2&quot;>
        {{ item.price }} $
      </v-container>

      <v-card-actions class=&quot;pt-0&quot;>
        <v-btn
          color=&quot;accent&quot;
        />
          Cancel
        </v-btn>
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