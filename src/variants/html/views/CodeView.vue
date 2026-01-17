<template>
  <CodeTemplate 
  technology="HTML" 
  :list="[
    'HTML (Hyper Text Markup Language) is a basic technology all modern web is built on',
    'It\'s a markup language, that helps in building of site layout',
    'No styles, no scripts yet, just simple markup',
  ]"
  :code='`<div>
  <img src="/img/products/bananas.jpg">
  <div>Bananas</div>
  <div>
    10$
    <button>BUY</button>
  </div>
</div>`'
  >
  </CodeTemplate>
</template>

<script lang="ts">
  import CodeTemplate from '@/components/CodeTemplate.vue';

  export default {
    components: {
      CodeTemplate
    }
  }
</script>


