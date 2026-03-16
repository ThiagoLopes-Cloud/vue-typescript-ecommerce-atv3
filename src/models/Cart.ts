// Importa classes necessárias
import { CartItem } from "./CartItem"
import { Product } from "./Product"

// Classe responsável pela lógica do carrinho
export class Cart {

  // Lista de itens no carrinho
  items: CartItem[] = []

  // Método que adiciona um produto ao carrinho
  addItem(product: Product) {

    // Procura se o produto já existe no carrinho
    const existingItem = this.items.find(
      item => item.product.id === product.id
    )

    // Se existir, aumenta a quantidade
    if (existingItem) {

      existingItem.quantity++

    } else {

      // Caso contrário cria um novo item
      this.items.push(new CartItem(product))

    }

  }

  // Retorna o total de itens do carrinho
  getTotalItems(): number {

    return this.items.reduce(

      (total, item) => total + item.quantity,

      0
    )

  }

  // Calcula o preço final da compra
  getFinalPrice(): number {

    return this.items.reduce(

      (total, item) =>
        total + item.product.price * item.quantity,

      0
    )

  }

}
