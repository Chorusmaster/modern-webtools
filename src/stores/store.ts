import { defineStore } from 'pinia'
import products from '../data/products.json'

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
  basket: Item[]
}

export const useBasketStore = defineStore('basketStore', {
  state: (): BasketState => ({
    basket: []
  }),
  getters: {
    totalPrice: (state) => state.basket.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
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
    }
  }
})
