<script lang="ts">

import { defineComponent } from "vue"

// importa componente
import ProductCard from "./components/ProductCard.vue"

// importa model
import { Product } from "./models/Product"

export default defineComponent({

  name: "App",

  components: {
    ProductCard
  },

  data() {

    return {

      // lista de produtos fictícios
      products: [

        new Product(1, "Notebook Gamer", 4500),
        new Product(2, "Mouse Gamer", 150),
        new Product(3, "Teclado Mecânico", 350),
        new Product(4, "Monitor 27 Polegadas", 1200)

      ],

      // lista do carrinho
      cartItems: []

    }

  },

  methods: {

    addToCart(product: Product) {

      console.log("Produto adicionado:", product)

    }

  }

})

</script>


<template>

  <div>

    <h1>Mini E-commerce</h1>

    <!-- lista de produtos -->
    <Produtocard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />

  </div>

</template>