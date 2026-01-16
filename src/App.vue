<template>
  <v-app>
    <VuetifyNavbar />
    <SidePanel />
    <VuetifyPage />
  </v-app>
</template>

<script lang="ts">
  import SidePanel from "./components/SidePanel.vue";
  import VuetifyNavbar from "./components/VuetifyNavbar.vue";
  import VuetifyPage from "./components/VuetifyPage.vue";

  export default {
    components: {
      SidePanel,
      VuetifyNavbar,
      VuetifyPage
    }
  };
</script>