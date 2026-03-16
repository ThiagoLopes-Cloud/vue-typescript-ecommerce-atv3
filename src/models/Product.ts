// Classe que representa um produto da loja
export class Product {

  // Identificador único do produto
  id: number

  // Nome do produto
  name: string

  // Preço do produto
  price: number

  // Construtor executado quando criamos um novo produto
  constructor(id: number, name: string, price: number) {

    // Define o id do produto
    this.id = id

    // Define o nome do produto
    this.name = name

    // Define o preço do produto
    this.price = price
  }

}
