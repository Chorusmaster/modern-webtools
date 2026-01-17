<template>
  <div class='clear-format'>
    <div class="banner">
      <div class="banner-text">
        <h1>Your basket:</h1>
        <div class="total-price-container">
          <button class="buy-all">BUY</button>
          <h2 class="total-price">0.00$</h2>
        </div>
      </div>

      <img src="@/assets/img/basket_banner.png">
    </div>

    <div class="empty-message">Basket is empty</div>

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

  .total-price-container {
    display: flex;
    align-items: center;
  }

  .buy-all {
    width: 92px;
    height: 52px;
    margin-left: 10px;
    margin-right: 16px;
    border: none;
    border-radius: 4px;
    background-color: #4DE600;
    color: black;
    font-weight: 600;
    font-size: 18px;
  }

  .buy-all:hover {
    background-color: #49db00;
  }

  .total-price {
    color: #4DE600;
    font-size: 60px;
    margin: 0;
  }

  .empty-message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 200px;
    font-size: 34px;
    margin-top: 30px;
    color: #6a7282;
  }
</style>