<template>
  <v-app-bar :elevation="2" class="px-4">
    <v-app-bar-title>Modern web tools</v-app-bar-title>

    <v-spacer />

    <v-btn :to="`/${variant}/code`">Code</v-btn>
    <v-btn :to="`/${variant}/home`">Home</v-btn>
    <v-btn :to="`/${variant}/basket`">Basket</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
  export default {
    computed: {
      variant() {
        return this.$route.meta.variant || 'html';
      }
    }
  };
</script>