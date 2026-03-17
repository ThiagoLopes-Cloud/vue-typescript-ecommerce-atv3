<script lang="ts">

// Importa função para criar componente
import { defineComponent } from "vue"

// Importa o componente de produto
import ProductCard from "./components/ProductCard.vue"

// Importa o model Product
import { Product } from "./models/Product"

// Define o componente principal
export default defineComponent({

  name: "App",

  // Registra o componente
  components: {
    ProductCard
  },

  // Estado da aplicação
  data() {
    return {

      // Lista de produtos
      products: [

        new Product(1, "Notebook Gamer", 4500),
        new Product(2, "Mouse Gamer", 150),
        new Product(3, "Teclado Mecânico", 350),
        new Product(4, "Monitor 27 Polegadas", 1200)

      ],

      // Carrinho (array tipado corretamente)
      cartItems: [] as Product[]

    }
  },

  // Métodos do componente
  methods: {

    // Adiciona produto ao carrinho
    addToCart(product: Product) {

      // Adiciona direto no array
      this.cartItems.push(product)

      console.log("Produto adicionado:", product)

    }

  },

  // Computed (boa prática para cálculos)
  computed: {

    // Total de itens
    totalItems(): number {
      return this.cartItems.length
    },

    // Soma total dos preços
    totalPrice(): number {
      return this.cartItems.reduce((total, item) => total + item.price, 0)
    }

  }

})

</script>


<template>

  <div>

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

  </div>

</template>