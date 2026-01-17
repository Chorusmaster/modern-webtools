import { defineStore } from 'pinia'
import axios from "axios";

type Product = {
  img: string,
  name: string,
  price: number,
}

type Item = {
  product: Product,
  quantity: number
}

interface BasketState {
  basket: Item[],
  backendBasket: Item[]
}

export const useBasketStore = defineStore('basketStore', {
  state: (): BasketState => ({
    basket: [],
    backendBasket: []
  }),
  getters: {
    totalPrice: (state) => state.basket.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    totalPriceBackend: (state) => state.backendBasket.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  },
  actions: {
    addItem(product: Product) {
      const existing: Item | undefined = this.basket.find((item: Item) => item.product.name === product.name)

      if (existing) {
        existing.quantity++
      } else {
        const item: Item = {product,  quantity: 1}
        this.basket.push(item)
      }
    },
    removeItem(index: number) {
      this.basket.splice(index, 1)
    },
    clearStore() {
      this.basket = []
    },
    async addItemBackend(product: Product) {
      const { data } = await axios.post(
          "http://localhost:3000/api/basket/",
          { ...product }
        );
    },
    async removeItemBackend(index: number) {
      const { data } = await axios.delete(`http://localhost:3000/api/basket/${index}`);
    },
    async clearStoreBackend() {
      const { data } = await axios.delete("http://localhost:3000/api/basket/");
    },
    async getStoreBackend() {
      const { data } = await axios.get<Item[]>("http://localhost:3000/api/basket/");
      this.backendBasket = data;
    }
  }
})
