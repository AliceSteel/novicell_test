export interface Rating {
  rate: number
  count: number
}

export type Category = 
  | "men's clothing"
  | "women's clothing"
  | 'electronics'
  | 'jewelery'

export interface Product {
  id: number
  title: string
  price: number
  description?: string
  category: Category
  image?: string 
  rating?: Rating
}