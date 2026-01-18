<template>
  <CodeTemplate 
  technology="JavaScript" 
  :list="[
    'JavaScript is a programming language, that is responsible for the logic of web',
    'In fact almost everything, that moves on the Internet was made in JavaScript or one of it\'s &quot;upgraded versions&quot;',
    'In this site JS is used to read data about products from the file and display it on the screen',
  ]"
  :code='`const card_template = document.getElementById("card-template");
const container = document.getElementById("cards-container");

for (const product of products) {
  const card = card_template.content.cloneNode(true);

  card.querySelector(".card-header").textContent = product.name;
  card.querySelector(".card-price").textContent = product.price + "$";
  card.querySelector("img").src = "/img/products/" + product.img;

  container.appendChild(card);
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


