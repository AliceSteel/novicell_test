export default defineEventHandler(async (event) => {
 const { category, limit } = getQuery(event)

  const baseUrl = category
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category as string)}`
    : `https://fakestoreapi.com/products`

  const url = limit ? `${baseUrl}?limit=${limit}` : baseUrl

  try {
    const products = await $fetch(url)
    return products
  } catch (error) {
    throw createError({ status: 500, message: 'Failed to fetch products' })
  }
})