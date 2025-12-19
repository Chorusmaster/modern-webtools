<template>
  <v-app>
    <v-layout>
      <div class="flex">
        <VuetifyPage />
      </div>
    </v-layout>
  </v-app>
</template>

<script>
  import VuetifyPage from "./components/VuetifyPage.vue";

  export default {
    components: {
      VuetifyPage
    }
  };
</script>