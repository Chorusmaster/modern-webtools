<template>
  <div class='clear-format'>
    <div class="banner">
      <div class="banner-text">
        <h1>Just another<br> e<span class="smaller-spacing"> - </span>commerce</h1>
        <h2 class="products-count"><span class="bold-number">0</span> products</h2>
        <h2 class="customers-count"><span class="bold-number">0</span> happy customers</h2>
      </div>

      <img src="@/assets/img/home_banner.png"></img>
    </div>

    <div class="cards-container">

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

      <div class="card">
        <img src="/img/products/apples.jpg"></img>
        <div class="card-body">
          <div class="card-info">
            <div class="card-header">Apples</div>
            <div class="card-price">1.25$</div>
          </div>
          <button>BUY</button>
        </div>
      </div>

      <div class="card">
        <img src="/img/products/pears.jpg"></img>
        <div class="card-body">
          <div class="card-info">
            <div class="card-header">Pears</div>
            <div class="card-price">2.51$</div>
          </div>
          <button>BUY</button>
        </div>
      </div>

      <div class="card">
        <img src="/img/products/bread.jpg"></img>
        <div class="card-body">
          <div class="card-info">
            <div class="card-header">Bread</div>
            <div class="card-price">2.80$</div>
          </div>
          <button>BUY</button>
        </div>
      </div>

    </div>
  </div>
</template>

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

  .cards-container {
    margin-top: 60px;
    padding-left: 64px;
    width: 100vw;
    display: flex;
    flex-direction: row;
  }

  .card {
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    background-color: #222121;
    margin: 16px;
    width: 280px;
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