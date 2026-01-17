<template>
  <div class='clear-format'>
    <div class="banner">
      <div class="banner-text">
        <h1>Just another<br> e<span class="smaller-spacing"> - </span>commerce</h1>
        <h2 class="products-count"><span class="bold-number">0</span> products</h2>
        <h2 class="customers-count"><span class="bold-number">0</span> happy customers</h2>
      </div>

      <img src="../../../assets/img/home_banner.png"></img>
    </div>

    <template id="card-template">
      <div class="card">
        <img src="/img/products/bananas.jpg"></img>
        <div class="card-body">
          <div class="card-info">
            <div class="card-header">Bananas</div>
            <div class="card-price">2.22$</div>
          </div>
          <button>BUY</button>
        </div>
      </div>
    </template>

    <div class="scroll-container">
      <button id="left-slide"><</button>
      <div id="cards-container"></div>
      <button id="right-slide">></button>
    </div>
  </div>
</template>

<script lang="ts">
  import products from '@/data/products.json';

  function initPage() {
    const card_template:HTMLTemplateElement | null = document.getElementById("card-template") as HTMLTemplateElement;
    const container:HTMLElement | null = document.getElementById("cards-container");

    if (card_template && container) {
      for (const product of products) {
        const card = card_template.content.cloneNode(true) as DocumentFragment;

        if(card.querySelector(".card-header")) card.querySelector(".card-header")!.textContent = product.name;
        if(card.querySelector(".card-price")) card.querySelector(".card-price")!.textContent = product.price + "$";
        if(card.querySelector("img")) card.querySelector("img")!.src = "/img/products/" + product.img;

        container.appendChild(card);
      }
    }

    const button_left:HTMLElement | null = document.getElementById("left-slide");
    const button_right:HTMLElement | null = document.getElementById("right-slide");

    if (button_left && container) {
      button_left.addEventListener("click", () => {
        container.scrollBy({
          left: -314,
          behavior: "smooth"
        })
      })
    }

    if (button_right && container) {
      button_right.addEventListener("click", () => {
        container.scrollBy({
          left: 314,
          behavior: "smooth"
        })
      })
    }

    const products_count: HTMLElement | null = document.querySelector(".products-count > span");
    if (products_count) products_count.textContent = products.length.toString();
  }

  export default {
    mounted() {
      initPage();
    } 
  };
</script>

<style scoped>
  .banner {
    display: flex;
    justify-content: space-between;
  }

  .banner-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 64px;
    margin-bottom: 20px;
    padding: 16px;
  }

  h1 {
    font-size: 6rem;
    padding: 0;
    margin: 0; 
    line-height: 1;
    letter-spacing: -1.5px;
  }

  .products-count {
    margin: 0;
    padding-bottom: 10px;
    font-size: 3rem;
    font-weight: 400;
    color: #4DE600;
  }

  .customers-count {
    margin: 0;
    font-weight: 400;
    color: #AAAAAA;
  }

  .bold-number {
    font-weight: 600;
  }

  .smaller-spacing {
    word-spacing: -12px;
  }

  /* CARDS */

  .scroll-container {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-right: 5vw;
    padding-left: 5vw;
    overflow: hidden;
  }

  .scroll-container > button {
    height: 60px;
    width: 40px;
    font-size: 25px;
    background-color: transparent;
    border: none;
  }

  .scroll-container > button:hover {
    color: #e6e6e6;
  }

  #cards-container {
    margin-top: 60px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  #cards-container::-webkit-scrollbar {
    display: none;
  }

  .card {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    background-color: #222121;
    margin: 16px;
    width: 280px;
    min-width: 280px;
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card img {
    width: 100% !important;
    height: 208px;
    object-fit: cover;
  }

  .card-body {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 8px;
  }

  .card-info {
    padding: 12px;
  }

  .card-header {
    font-size: 20px;
  }

  .card-price {
    font-size: 16px;
    margin-top: 6px;
    color: #AAAAAA;
  }

  .card button {
    width: 64px;
    height: 40px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    color: #4DE600;
  }

  .card button:hover {
    background-color: #4de6000e;
  }
</style>