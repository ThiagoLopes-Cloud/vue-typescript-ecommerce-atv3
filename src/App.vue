<script lang="ts">

// Importa função para criar componente no Vue
import { defineComponent } from "vue"

// Importa componente de produto
import ProductCard from "./components/ProductCard.vue"

// Importa model Product
import { Product } from "./models/Product"

// Define componente principal
export default defineComponent({

  name: "App",

  components: {
    ProductCard
  },

  // Estado da aplicação
  data() {
    return {

      // Lista de produtos fictícios
      products: [

        new Product(1, "Notebook Gamer", 4500),
        new Product(2, "Mouse Gamer", 150),
        new Product(3, "Teclado Mecânico", 350),
        new Product(4, "Monitor 27 Polegadas", 1200)

      ],

      // Carrinho com estrutura profissional
      cartItems: [] as { product: Product; quantity: number }[]

    }
  },

  // Métodos (regras de negócio)
  methods: {

    // Adiciona produto ao carrinho
    addToCart(product: Product) {

      const existingItem = this.cartItems.find(
        item => item.product.id === product.id
      )

      if (existingItem) {

        existingItem.quantity++

      } else {

        this.cartItems.push({
          product: product,
          quantity: 1
        })

      }

    },

    // Aumenta quantidade
    increaseQuantity(productId: number) {

      const item = this.cartItems.find(
        item => item.product.id === productId
      )

      if (item) {
        item.quantity++
      }

    },

    // Diminui quantidade
    decreaseQuantity(productId: number) {

      const item = this.cartItems.find(
        item => item.product.id === productId
      )

      if (item) {

        item.quantity--

        if (item.quantity <= 0) {
          this.removeItem(productId)
        }

      }

    },

    // Remove item
    removeItem(productId: number) {

      this.cartItems = this.cartItems.filter(
        item => item.product.id !== productId
      )

    }

  },

  // Valores calculados automaticamente
  computed: {

    // Total de itens
    totalItems(): number {
      return this.cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      )
    },

    // Preço total
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

  <div class="container">

    <!-- Título -->
    <h1>🛒 Mini E-commerce</h1>

    <!-- Lista de produtos -->
    <div class="products">

      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />

    </div>

    <!-- Carrinho -->
    <div class="cart">

      <h2>Carrinho</h2>

      <p>Total de itens: {{ totalItems }}</p>

      <p>Total: R$ {{ totalPrice }}</p>

      <!-- Lista de itens -->
      <div
        v-for="item in cartItems"
        :key="item.product.id"
        class="cart-item"
      >

        <p><strong>{{ item.product.name }}</strong></p>

        <p>R$ {{ item.product.price }}</p>

        <p>Quantidade: {{ item.quantity }}</p>

        <div class="buttons">

          <button @click="increaseQuantity(item.product.id)">➕</button>

          <button @click="decreaseQuantity(item.product.id)">➖</button>

          <button @click="removeItem(item.product.id)">❌</button>

        </div>

      </div>

    </div>

  </div>

</template>


<style>

.container {
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cart {
  margin-top: 30px;
}

.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
}

.buttons button {
  margin-right: 5px;
  cursor: pointer;
}

</style>