<template>
  <v-container fluid class="mt-10 pa-0">
    <VuetifyBanner :src="banner">
      <h1 class="text-h1 font-weight-black mt-8">Your basket:</h1>
      <div class="mt-3">
        <v-btn size="x-large" color="accent" class="mb-7 ml-3 mr-4 font-weight-semibold" @click="basketStore.clearStore()">Buy</v-btn>
        <h2 class="text-h2 pt-2 pb-6 text-accent inline-block smaller-spacing font-weight-semibold">{{basketStore.totalPrice.toFixed(2)}} $</h2>
      </div>
    </VuetifyBanner>

    <v-container v-if="basketStore.basket.length == 0" class="text-h4 text-center pt-16 text-gray-500">Basket is empty</v-container>
    <VuetifyBasketCards />
    
  </v-container>
</template>

<style scoped>
  .smaller-spacing {
    word-spacing: -12px;
  }
</style>

<script>
  import VuetifyBanner from '@/components/VuetifyBanner.vue';
  import VuetifyBasketCards from '@/components/VuetifyBasketCards.vue';
  import banner from '../assets/img/basket_banner.png';
  import { useBasketStore } from '@/stores/store';

  export default {
    data() {
      return {
        banner
      }
    },
    computed: {
      basketStore() {
        return useBasketStore()
      } 
    },
    components: {
      VuetifyBanner,
      VuetifyBasketCards
    }
  }
</script>