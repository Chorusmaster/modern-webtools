<template>
  <div class='clear-format'>
    <div class="d-flex justify-between!">
      <div class="d-flex flex-col! justify-center ml-16! mb-5! p-4!">
        <h1 class="text-8xl! p-0! m-0! leading-none -tracking-[1.5px]!">Just another<br> e<span class="smaller-spacing"> - </span>commerce</h1>
        <h2 class="products-count mt-2! mb-2! pb-2.5! text-5xl! font-normal! text-[#4DE600]!"><span class="font-semibold!">{{ productsCount() }}</span> products</h2>
        <h2 class="m-0! font-normal! text-[#AAAAAA]!"><span class="font-semibold!">0</span> happy customers</h2>
      </div>

      <img src="@/assets/img/home_banner.png">
    </div>

    <div class="scroll-container d-flex items-center! flex-row! px-[5vw]! overflow-hidden!">
      <button id="left-slide" class="h-15! w-10! mt-8! text-2xl! bg-transparent! border-none!" @click="scrollLeft"><</button>
      <div ref="container" id="cards-container" class="mt-15! w-screen! d-flex flex-row! overflow-x-auto scrollbar-hide">
        
        <div class="bg-[#222121]! m-4! w-70! min-w-70! transition-transform! duration-300! hover:scale-103! shrink-0!" v-for="(product, index) in products" :key="index">
          <img class="w-full! h-52! object-cover!" :src="`/img/products/${product.img}`">
          <div class="d-flex items-end! justify-between! p-2!">
            <div class="p-3!">
              <div class="card-header text-xl!">{{ product.name }}</div>
              <div class="card-price text-base! text-[#AAAAAA]!">{{ product.price }}$</div>
            </div>
            <button class="w-16! h-10! text-sm! bg-transparent! hover:bg-[#4de6000e]! border-none! rounded text-[#4DE600]!">BUY</button>
          </div>
        </div>

      </div>
      <button id="right-slide" class="h-15! w-10! mt-8! text-2xl! bg-transparent! border-none!" @click="scrollRight">></button>
    </div>
  </div>
</template>

<script lang="ts">
  import products from '@/data/products.json';

  type Product = {
    name: string;
    price: number;
    img: string;
  };

  export default {
    data(): { products: Product[] } {
      return {
        products: products as Product[]
      }
    },
    methods: {
      productsCount() {
        return this.products.length;
      },
      scrollLeft() {
        const container = this.$refs.container as HTMLDivElement | undefined;
        if(container) container.scrollBy({ left: -314, behavior: 'smooth' });
      },
      scrollRight() {
        const container = this.$refs.container as HTMLDivElement | undefined;
        if(container) container.scrollBy({ left: 314, behavior: 'smooth' });
      }
    }
  }
</script>

<style scoped>
  .smaller-spacing {
    word-spacing: -12px;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>