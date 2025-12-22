<template>
  <v-container fluid class="mt-10 pa-0">
    <VuetifyBanner :src="banner">
      <h1 class="text-h1 font-weight-black mt-8">Your basket:</h1>
      <div class="mt-3">
        <v-btn size="x-large" color="accent" class="mb-7 ml-3 mr-4 font-weight-semibold">Buy</v-btn>
        <h2 class="text-h2 pt-2 pb-6 text-accent inline-block smaller-spacing font-weight-semibold">10 $</h2>
      </div>
    </VuetifyBanner>

    <v-container class="d-flex mr-16 ml-16 mt-0">
      <v-card class="ma-4 bg-surface" max-width="344" min-width="300">
        <img class="w-100 h-52 object-cover" src="../../public/img/goods/bananas.jpg" cover></img>

        <v-card-title class="pb-0 pt-4">
          Bananas
        </v-card-title>

        <div class="d-flex justify-space-between">
          <v-container class="text-secondary pt-2">
            10 $
          </v-container>

          <v-card-actions class="pt-0">
            <v-btn color="accent" text="Cancel"></v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
  .smaller-spacing {
    word-spacing: -12px;
  }
</style>

<script>
  import VuetifyBanner from '@/components/VuetifyBanner.vue';
  import banner from '../assets/img/basket_banner.png';

  export default {
    data() {
      return {
        banner
      }
    },
    components: {
      VuetifyBanner
    }
  }
</script>