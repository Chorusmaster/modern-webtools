<template>
  <div class="d-flex mb-10">
    <v-container class="d-flex ml-16 mb-5 align-center">
      <div>
        <slot></slot>
      </div>
    </v-container>

    <div>
      <img :src="src" class="object-cover"></img>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["src"]
  }
</script>