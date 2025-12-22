import { defineStore } from 'pinia'
import products from '../data/products.json'

export const useBasketStore = defineStore('basketStore', {
  state: () => {
    return { basket: [] }
  },
  getters: {
    totalPrice: (state) => {
      if(state.basket.length == 0) {
        return 0
      } else {
        return state.basket.reduce((sum, product) => sum += product.price * product.quantity, 0)
      }
    }
  },
  actions: {
    addProduct(product) {
      const existing = this.basket.find((item) => item.name == product.name)

      if (existing) {
        existing.quantity++
      } else {
        product.quantity = 1
        this.basket.push(product)
      }
    },
    removeProduct(id) {
      this.basket = this.basket.filter((_, index) => index != id)
    },
    clearStore() {
      this.basket = []
    }
  }
})
