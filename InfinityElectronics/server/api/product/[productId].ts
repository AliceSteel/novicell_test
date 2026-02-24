export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'productId')

  if (!id) {
    throw createError({ status: 400, message: 'Product ID is required' })
  }

  try {
    const product = await $fetch(`https://fakestoreapi.com/products/${id}`)
    return product

  } catch (error) {
    throw createError({
      status: 500,
      message: `Failed to fetch product ${id}`,
    })
  }
})
