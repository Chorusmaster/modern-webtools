<template>
  <v-container>
    <pre class="code-block">
      <code class="px-12">
{{ code }}
      </code>
    </pre>
  </v-container>
</template>

<style scoped>
.code-block {
  white-space: pre; 
}
</style>

<script>
  import hljs from 'highlight.js';
  import 'highlight.js/styles/github-dark.css'

  export default {
    props: ["code"],
    mounted() {
      hljs.highlightAll();
    }
  }
</script>