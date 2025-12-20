<template>
  <v-app>
    <v-layout class="d-flex flex-column">

      <v-app-bar :elevation="2" class="px-4">
        <v-app-bar-title>eSHOP</v-app-bar-title>

        <v-spacer />

        <v-btn>Code</v-btn>
        <v-btn class="text-accent font-weight-bold">Home</v-btn>
        <v-btn>Basket</v-btn>
      </v-app-bar>

      <v-main class="flex-column">
        <div class="flex">
          <v-container class="d-flex ml-16 align-center">
            <div>
              <h1 class="text-h1 font-weight-black">Just another<br> <span class="smaller-spacing">e - commerce</span></h1>
              <h2 class="text-h3 pt-2 pb-6 text-accent"><span class="font-weight-semibold">{{ goodsCount() }}</span> products</h2>
              <h2 class="text-h5 text-secondary"><span class="font-weight-semibold">10000</span> happy customers</h2>
            </div>
          </v-container>
          <div>
            <img src="../assets/img/banner.png" class="object-cover"></img>
          </div>
        </div>
        <VuetifyPageCards />
      </v-main>

      <v-footer class="d-flex align-center justify-center ga-2 mt-16">
        {{ new Date().getFullYear() }} — Just another company
      </v-footer>

    </v-layout>
  </v-app>
</template>

<script>
  import VuetifyPageCards from './VuetifyPageCards.vue';
  import goods from '@/data/goods.json';

  export default {
    components: {
      VuetifyPageCards
    },
    methods: {
      goodsCount() {
        return (!goods ? 0 : goods.length)
      }
    }
  }
</script>

<style scoped>
  .smaller-spacing {
    word-spacing: -15px;
  }
</style>