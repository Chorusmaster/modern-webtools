<template>
  <v-container fluid>
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="(product, index) in products" :key="index">
        <v-card class="ma-4 hover-elevation-8" max-width="344">
          <img class="w-70 h-52 object-cover" :src="`img/products/${product.img}`" cover></img>

          <v-card-title class="pb-0 pt-4">
            {{product.name}}
          </v-card-title>

          <div class="d-flex justify-space-between">
            <v-container class="text-secondary pt-2 smaller-spacing">
              {{product.price.toFixed(2)}} $
            </v-container>

            <v-card-actions class="pt-0">
              <v-btn color="accent" text="Buy" @click="basketStore.addItem(product)"></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>

<style scoped>
  .smaller-spacing {
    word-spacing: -2px;
  }

  .v-card {
    transition: transform 0.2s ease
  }

  .v-card:hover {
    transform: scale(1.02);
  }
</style>

<script lang="ts">
  import products from '@/data/products.json';
  import { useBasketStore } from '@/stores/store';

  export default {
    data() {
      return {
        products: products
      }
    }, computed: {
      basketStore() {
        return useBasketStore()
      } 
    }
  }
</script>