<template>
  <v-app>
    <v-layout>
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
              <h2 class="text-h3 pt-2 pb-6 text-accent"><span class="font-weight-semibold">0</span> products</h2>
              <h2 class="text-h5 text-secondary"><span class="font-weight-semibold">0</span> happy customers</h2>
            </div>
          </v-container>
          <div>
            <img src="../assets/img/banner.png" class="object-cover"></img>
          </div>
        </div>
        <div class="flex gap-[2vw] justify-center ma-10">
          <VuetifyPageCard />
          <VuetifyPageCard />
          <VuetifyPageCard />
          <VuetifyPageCard />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
  import VuetifyCard from './VuetifyPageCard.vue';
import VuetifyPageCard from './VuetifyPageCard.vue';

  export default {
    components: {
      VuetifyPageCard
    }
  }
</script>

<style scoped>
  .smaller-spacing {
    word-spacing: -15px;
  }
</style>