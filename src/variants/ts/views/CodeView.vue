<template>
  <CodeTemplate 
  technology="TypeScript" 
  :list="[
    'TypeScript is high-level programming language that introduces type checks into JavaScript',
    'Basically it\'s &quot;JavaScript+&quot; that politely tries to protect you from your own variables, which due to their ability to change type on the go can make the code nearly imposible to maintain',
  ]"
  :code='`const card_template:HTMLTemplateElement | null = document.getElementById("card-template") as HTMLTemplateElement;
const container:HTMLElement | null = document.getElementById("cards-container");

if (card_template && container) {
  for (const product of products) {
    const card = card_template.content.cloneNode(true) as DocumentFragment;

    if(card.querySelector(".card-header")) card.querySelector(".card-header")!.textContent = product.name;
    if(card.querySelector(".card-price")) card.querySelector(".card-price")!.textContent = product.price + "$";
    if(card.querySelector("img")) card.querySelector("img")!.src = "/img/products/" + product.img;

    container.appendChild(card);
  }
}`'
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