<template>
  <v-container fluid class="mt-10 pa-0">
    <VuetifyBanner :src="banner">
      <h1 class="text-h1 font-weight-black">Just another<br> <span class="smaller-spacing">e - commerce</span></h1>
      <h2 class="text-h3 pt-2 pb-6 text-accent"><span class="font-weight-semibold">{{ goodsCount() }}</span> products</h2>
      <h2 class="text-h5 text-secondary"><span class="font-weight-semibold">10000</span> happy customers</h2>
    </VuetifyBanner>

    <VuetifyCards />
  </v-container>
</template>

<style scoped>
  .smaller-spacing {
    word-spacing: -12px;
  }
</style>

<script>
  import VuetifyBanner from '@/components/VuetifyBanner.vue';
  import VuetifyCards from '../components/VuetifyCards.vue';
  import goods from '@/data/goods.json';
  import banner from '../assets/img/home_banner.png';

  export default {
    data() {
      return {
        banner
      }
    },
    methods: {
      goodsCount() {
        return (!goods ? 0 : goods.length)
      }
    },
    components: {
      VuetifyCards,
      VuetifyBanner
    }
  }
</script>