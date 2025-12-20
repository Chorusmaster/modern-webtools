<template>
  <div class="full-width">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="product in products" :key="product.id">
        <v-card class="ma-4" max-width="344">
          <img class="w-70 h-52 object-cover" :src="`img/goods/${product.img}`" cover></img>

          <v-card-title class="pb-0 pt-4">
            {{product.name}}
          </v-card-title>

          <div class="d-flex justify-space-between">
            <v-container class="text-secondary pt-2 smaller-spacing">
              {{product.price.toFixed(2)}} $
            </v-container>

            <v-card-actions class="pt-0">
              <v-btn color="accent" text="Buy"></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<style scoped>
  .full-width {
    width: 98vw;
  }
  .smaller-spacing {
    word-spacing: -2px;
  }
</style>

<script>
  import goods from '@/data/goods.json';

  export default {
    data() {
      return {
        products: goods
      }
    }, computed: {

    }
  }
</script>