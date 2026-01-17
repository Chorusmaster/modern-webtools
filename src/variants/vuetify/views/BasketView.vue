<template>
  <v-container fluid class="mt-10 pa-0">
    <VuetifyBanner :src="banner">
      <h1 class="text-h1 font-weight-black mt-8">Your basket:</h1>
      <div class="mt-3">
        <v-btn size="x-large" color="accent" class="mb-7 ml-3 mr-4 font-weight-semibold">Buy</v-btn>
        <h2 class="text-h2 pt-2 pb-6 text-accent inline-block smaller-spacing font-weight-semibold">0$</h2>
      </div>
    </VuetifyBanner>

    <v-container class="text-h4 text-center pt-16 text-gray-500">Basket is empty</v-container>
    
  </v-container>
</template>

<style scoped>
  .smaller-spacing {
    word-spacing: -12px;
  }
</style>

<script lang="ts">
  import VuetifyBanner from '@/components/VuetifyBanner.vue';
  import banner from '@/assets/img/basket_banner.png';

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