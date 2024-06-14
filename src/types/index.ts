export type Guitar = {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export type CartItem = Guitar & {
  quantity: number
}

// export type GuitarID = Guitar["id"]
// no usamos el tipado y ponemos directamente Guitar["id"] en vez de GuitarID
