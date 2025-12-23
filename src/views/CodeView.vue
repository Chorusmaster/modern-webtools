<template>
    <v-container fluid class="mt-16 pb-0 px-10">
      <v-row no-gutters>
        <v-col cols="4">

          <v-container class="d-flex mb-5 justify-center">
            <div>
              <h1 class="text-h1 font-weight-black mt-8">Vuetify</h1>
              <div class="mt-3">
                <h2 class="text-h4 pt-2 pb-6 text-accent inline-block">What's new?</h2>
              </div>
              <ul class="text-h6 bulleted-list">
                <li class="py-1">Lorem ipsum dolor sit amet</li>
                <li class="py-1">Lorem ipsum dolor sit amet</li>
                <li class="py-1">Lorem ipsum dolor sit amet</li>
                <li class="py-1">Lorem ipsum dolor sit amet</li>
                <li class="py-1">Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </v-container>

        </v-col>
        <v-col cols="8">

          <v-container fluid class="mt-8">
            <h2 class="text-h4 text-center">Code sample for card</h2>
            <CodeBlock :code="code" class="pt-2" />
          </v-container>

        </v-col>
      </v-row>
    </v-container class="mb-0">
</template>

<style scoped>
  .full-width {
    width: 100vw;
  }

  .bulleted-list {
    list-style-type: disc;
    padding-left: 1em;
  }
</style>

<script>
  import CodeBlock from '@/components/CodeBlock.vue';

  export default {
    data() {
      return {
        code: '<v-card class="ma-4 bg-surface" max-width="344" min-width="300">\n  <img class="w-100 h-52 object-cover" :src=`img/products/${product.img}` cover></img>\n\n          <v-card-title class="pb-0 pt-4">\n            {{ product.name }}\n          </v-card-title>\n\n          <div class="d-flex justify-space-between">\n            <v-container class="text-secondary pt-2">\n            {{ product.price }} $ <span class="pl-6">{{ product.quantity }}x</span>\n            </v-container>\n\n            <v-card-actions class="pt-0">\n              <v-btn color="accent" text="Cancel" @click="basketStore.removeProduct(index)"></v-btn>\n            </v-card-actions>\n          </div>\n</v-card>'
      }
    },
    components: {
      CodeBlock
    }
  }
</script>


