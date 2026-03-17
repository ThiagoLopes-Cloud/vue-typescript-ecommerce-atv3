<script lang="ts">

// Importa função para criar componente no Vue
import { defineComponent } from "vue"

// Importa o componente de produto (filho)
import ProductCard from "./components/ProductCard.vue"

// Importa o modelo Product
import { Product } from "./models/Product"

// Define o componente principal
export default defineComponent({

  // Nome do componente
  name: "App",

  // Registra os componentes usados no template
  components: {
    ProductCard
  },

  // Estado reativo da aplicação
  data() {
    return {

      // Lista de produtos fictícios
      products: [

        new Product(1, "Notebook Gamer", 4500),
        new Product(2, "Mouse Gamer", 150),
        new Product(3, "Teclado Mecânico", 350),
        new Product(4, "Monitor 27 Polegadas", 1200)

      ],

      // Carrinho com estrutura correta (produto + quantidade)
      cartItems: [] as { product: Product; quantity: number }[]

    }
  },

  // Métodos da aplicação
  methods: {

    // Método chamado ao clicar em "Adicionar ao carrinho"
    addToCart(product: Product) {

      // Verifica se o produto já existe no carrinho
      const existingItem = this.cartItems.find(
        item => item.product.id === product.id
      )

      // Se já existe → aumenta quantidade
      if (existingItem) {

        existingItem.quantity++

      } else {

        // Se não existe → adiciona novo item
        this.cartItems.push({
          product: product,
          quantity: 1
        })

      }

    }

  },

  // Computed: valores calculados automaticamente
  computed: {

    // Total de itens no carrinho
    totalItems(): number {
      return this.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },

    // Preço total do carrinho
    totalPrice(): number {
      return this.cartItems.reduce(
        (total, item) => total + (item.product.price * item.quantity),
        0
      )
    }

  }

})

</script>


<template>

  <div>

    <!-- Título -->
    <h1>Mini E-commerce</h1>

    <!-- Lista de produtos -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />

    <!-- Resumo do carrinho -->
    <h2>Carrinho</h2>

    <p>Total de itens: {{ totalItems }}</p>

    <p>Preço total: R$ {{ totalPrice }}</p>

    <!-- Lista detalhada -->
    <h3>Itens no carrinho:</h3>

    <ul>
      <li v-for="item in cartItems" :key="item.product.id">
        {{ item.product.name }} - Quantidade: {{ item.quantity }}
      </li>
    </ul>

  </div>

</template>