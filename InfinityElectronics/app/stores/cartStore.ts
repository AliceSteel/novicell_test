import type { Product } from '@/types/Product.types'

export interface CartItem {
  product: Product
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])

  // Getters
  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  )

  const isInCart = (productId: number) =>
    items.value.some((item) => item.product.id === productId)

  const getQuantity = (productId: number) =>
    items.value.find((item) => item.product.id === productId)?.quantity ?? 0

  // Actions
  const addToCart = (product: Product) => {
    const existing = items.value.find((item) => item.product.id === product.id)

    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }
    // TODO:UPDATE SERVER
  }

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter((item) => item.product.id !== productId)
     // TODO:UPDATE SERVER
  }

  const decreaseQuantity = (productId: number) => {
    const existing = items.value.find((item) => item.product.id === productId)

    if (existing && existing.quantity > 1) {
      existing.quantity--
    } else {
      removeFromCart(productId)
    }
     // TODO:UPDATE SERVER
  }

  const clearCart = () => {
    items.value = []
     // TODO:UPDATE SERVER
  }

  return {
    items,
    totalItems,
    totalPrice,
    isInCart,
    getQuantity,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
  }
})