<template>
  <v-container fluid class="d-flex mr-8 ml-8 mt-0 pa-6">
    <v-row class="d-flex flex-row">
      <v-col v-for="(item, index) in basketStore.basket" :key="index" cols="auto">
        <v-card class="ma-4 bg-surface" max-width="344" min-width="300">
          <img class="w-100 h-52 object-cover" :src="`img/products/${item.product.img}`" cover></img>

          <v-card-title class="pb-0 pt-4">
            {{ item.product.name }}
          </v-card-title>

          <div class="d-flex justify-space-between">
            <v-container class="text-secondary pt-2">
            {{ item.product.price }} $ <span class="pl-6">{{ item.quantity }}x</span>
            </v-container>

            <v-card-actions class="pt-0">
              <v-btn color="accent" text="Cancel" @click="basketStore.removeItem(index)"></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  .v-card {
    transition: transform 0.2s ease
  }

  .v-card:hover {
    transform: scale(1.02);
  }
</style>

<script lang="ts">
  import { useBasketStore } from '@/stores/store';

  export default {
    computed: {
      basketStore() {
        return useBasketStore()
      }
    }
  }
</script>