<template>
  <CodeTemplate 
  technology="Tailwind" 
  :list="[
    'Tailwind CSS is, as is evidently from name, framework for CSS',
    'It allows to write predefined html classes instead of css rulesets',
    'It is very flexible and customizable, that allows to do almost everything that plain CSS allows but faster',
  ]"
  :code='`<div class="bg-[#222121]! m-4! w-70! min-w-70! transition-transform! duration-300! hover:scale-103!">
  <img class="w-full! h-52! object-cover!" src="/img/products/bananas.jpg">
  <div class="d-flex items-end! justify-between! p-2!">
    <div class="p-3!">
      <div class="card-header text-xl!">Bananas</div>
      <div class="card-price text-base! text-[#AAAAAA]!">2.22$</div>
    </div>
    <button class="w-16! h-10! text-sm! bg-transparent! hover:bg-[#4de6000e]! border-none! rounded text-[#4DE600]!">BUY</button>
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