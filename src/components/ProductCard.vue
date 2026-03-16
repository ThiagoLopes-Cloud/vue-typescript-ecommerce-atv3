<script lang="ts">

// Importa função principal do Vue
import { defineComponent } from "vue"

// Importa apenas o tipo PropType
import type { PropType } from "vue"

// Importa o modelo Product
import { Product } from "../models/Product"

// Criação do componente
export default defineComponent({

  // Nome do componente
  name: "ProductCard",

  // Props recebidas do componente pai
  props: {

    // Produto que será exibido
    product: {

      // Define que o tipo da prop é Product
      type: Object as PropType<Product>,

      // Define que a prop é obrigatória
      required: true

    }

  },

  // Eventos que o componente pode emitir
  emits: ["add-to-cart"],

  // Methods do componente
  methods: {

    // Método chamado ao clicar no botão
    handleAddToCart() {

      // Emite evento para o componente pai
      this.$emit("add-to-cart", this.product)

    }

  }

})

</script>


<template>

  <!-- Container do card do produto -->
  <div class="product-card">

    <!-- Nome do produto -->
    <h3>{{ product.name }}</h3>

    <!-- Preço do produto -->
    <p>Preço: R$ {{ product.price }}</p>

    <!-- Botão que adiciona o produto ao carrinho -->
    <button @click="handleAddToCart">

      Adicionar ao carrinho

    </button>

  </div>

</template>