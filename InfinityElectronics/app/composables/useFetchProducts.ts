import type { Product } from '@/types/Product.types'

export const useFetchProducts = async (url: string | Ref<string>) => {

    const { data, status, refresh, error } =
    await useFetch<Product | Product[]>(url)
   
  if (error.value) {
    console.error(`Error fetching products:`, error.value)
  }

  return {
    data,
    status,
    refresh,
    error,
    isLoading: computed(() => status.value === 'pending'),
  }
}