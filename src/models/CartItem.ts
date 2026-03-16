// Importa a classe Product
import { Product } from "./Product"

// Classe que representa um item dentro do carrinho
export class CartItem {

  // Produto associado ao item
  product: Product

  // Quantidade do produto no carrinho
  quantity: number

  // Construtor executado ao criar um novo item
  constructor(product: Product, quantity: number = 1) {

    // Guarda o produto
    this.product = product

    // Define a quantidade inicial
    this.quantity = quantity
  }

}
