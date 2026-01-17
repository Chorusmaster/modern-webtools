<template>
    <v-container fluid class="mt-16 pb-0 px-10">
      <v-row no-gutters>
        <v-col cols="4">
          <v-container class="d-flex mb-5 justify-center">
            <div>
              <h1 class="text-h1 font-weight-black mt-8">{{ technology }}</h1>

              <div class="mt-3">
                <h2 class="text-h4 pt-2 pb-6 text-accent inline-block">Main points:</h2>
              </div>

              <ul class="text-h6 bulleted-list">
                <li v-for="item of list" class="py-1">{{ item }}</li>
                <li class="py-1">In &quot;Home&quot; and &quot;Basket&quot; sections you can see, how simple dummy e-shop will look like in {{ technology }}</li>
              </ul>
            </div>
          </v-container>

        </v-col>
        <v-col cols="8">

          <v-container fluid class="mt-8">

            <h2 class="text-h4 text-center">Code sample for product card</h2>

            <v-container>
              <pre>
                <code class="px-12" ref="codeBlock">{{ code }}</code>
              </pre>
            </v-container>

          </v-container>

        </v-col>
      </v-row>
    </v-container class="mb-0">
</template>

<style scoped>
  .full-width {
    width: 100vw;
  }

  .bulleted-list {
    list-style-type: disc;
    padding-left: 1em;
  }
</style>

<script lang="ts">
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css'

  export default {
    props: {
      technology: String,
      list: Array,
      code: String
    },
    mounted() {
      hljs.highlightAll();
    }
  }
</script>
