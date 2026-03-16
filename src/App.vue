<script lang="ts">

import { defineComponent } from "vue"

// Importa o componente
import ProductCard from "./components/ProductCard.vue"

// Importa o model
import { Product } from "./models/Product"

export default defineComponent({

  components: {
    ProductCard
  },

  data() {

    return {

      // Produto fictício apenas para teste
      product: new Product(1, "Notebook Gamer", 4500)

    }

  }

})

</script>

<template>

  <h1>Minha Loja</h1>

  <!-- Renderiza o componente -->
  <ProductCard :product="product" />

</template>