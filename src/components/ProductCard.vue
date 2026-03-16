<script lang="ts">

// Importa funções necessárias do Vue
import { defineComponent } from "vue"
import type { PropType } from "vue"

// Importa o modelo Product
import { Product } from "../models/Product"

// defineComponent cria um componente Vue
export default defineComponent({

  // Nome do componente (boa prática)
  name: "ProductCard",

  // props são dados recebidos do componente pai
  props: {

    // prop chamada product
    product: {

      // definimos que o tipo é Product
      type: Object as PropType<Product>,

      // required significa que é obrigatório
      required: true

    }

  },

  // Eventos que o componente pode emitir
  emits: ["add-to-cart"]

})

</script>


<template>

  <!-- Container visual do produto -->
  <div class="product-card">

    <!-- Mostra o nome do produto -->
    <h3>{{ product.name }}</h3>

    <!-- Mostra o preço do produto -->
    <p>Preço: R$ {{ product.price }}</p>

    <!-- Botão para adicionar ao carrinho -->
    <button

      <!-- Quando clicado dispara um evento -->
      @click="$emit('add-to-cart', product)"

    >

      Adicionar ao carrinho

    </button>

  </div>

</template>