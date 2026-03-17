<script lang="ts">

// Importa a função defineComponent do Vue
// Ela é usada para criar componentes usando a Options API
import { defineComponent } from "vue"

// Importa o componente que criamos para mostrar cada produto
import ProductCard from "./components/ProductCard.vue"

// Importa o modelo Product que representa um produto da loja
import { Product } from "./models/Product"

// Exporta o componente principal da aplicação
export default defineComponent({

  // Nome do componente (boa prática para debug e organização)
  name: "App",

  // Registra os componentes que serão usados dentro do template
  components: {
    ProductCard
  },

  // data() retorna o estado reativo do componente
  // tudo que está aqui pode ser usado no template
  data() {

    return {

      // Lista de produtos da loja
      // Aqui criamos alguns produtos fictícios usando a classe Product
      products: [

        new Product(1, "Notebook Gamer", 4500),
        new Product(2, "Mouse Gamer", 150),
        new Product(3, "Teclado Mecânico", 350),
        new Product(4, "Monitor 27 Polegadas", 1200)

      ],

      // Array que irá armazenar os produtos adicionados no carrinho
      // No momento está vazio
      cartItems: []

    }

  },

  // methods contém as funções que podem ser usadas no componente
  methods: {

    // Função chamada quando o usuário clica em "Adicionar ao carrinho"
    // Recebe o produto enviado pelo componente ProductCard
    addToCart(product: Product) {

      // Exibe no console qual produto foi adicionado
      // Serve para testar se o evento está funcionando
      console.log("Produto adicionado:", product)

    }

  }

})

</script>


<template>

  <!-- Container principal da aplicação -->
  <div>

    <!-- Título da página -->
    <h1>Mini E-commerce</h1>

    <!--
      v-for percorre a lista de produtos
      Para cada produto ele cria um componente ProductCard
    -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"

      <!-- escuta o evento add-to-cart disparado pelo ProductCard -->
      @add-to-cart="addToCart"

    ></ProductCard>

  </div>

</template>