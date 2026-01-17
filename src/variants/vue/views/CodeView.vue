<template>
  <CodeTemplate 
  technology="Vue" 
  :list="[
    'Vue.js is a progressive JavaScript frontend framework',
    'It has many benefits, such as modularity and structurization for project, optimisation, client-side rendering and much more',
    'Above that Vue have big ecosystem with many other useful tools for web development',
  ]"
  :code="String.raw`<div class=&quot;bg-[#222121]! m-4! w-70! min-w-70! transition-transform! duration-300! hover:scale-103! shrink-0!&quot;
  v-for=&quot;(product, index) in products&quot;
  :key=&quot;index&quot;>
  <img class=&quot;w-full! h-52! object-cover!&quot;
       :src=&quot;\`/img/products/\${product.img}\`&quot;>
  <div class=&quot;d-flex items-end! justify-between! p-2!&quot;>
    <div class=&quot;p-3!&quot;>
      <div class=&quot;card-header text-xl!&quot;>{{ product.name }}</div>
      <div class=&quot;card-price text-base! text-[#AAAAAA]!&quot;>{{ product.price }}$</div>
    </div>
    <button class=&quot;w-16! h-10! text-sm! bg-transparent! hover:bg-[#4de6000e]! border-none! rounded text-[#4DE600]!&quot;>
      BUY
    </button>
  </div>
</div>`"
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