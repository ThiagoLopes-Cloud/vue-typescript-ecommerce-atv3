<script lang="ts">
import { defineComponent } from "vue"
import type { PropType } from "vue"
import { Product } from "../models/Product"

// PrimeVue
import Card from "primevue/card"
import PvButton from "primevue/button"

export default defineComponent({

  name: "ProductCard",

  components: {
    Card,
    PvButton 
  },

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },

  emits: ["add-to-cart"]

})
</script>

<template>

  <Card class="shadow-lg rounded-2xl">

    <template #title>
      {{ product.name }}
    </template>

    <template #content>
      <p class="text-lg font-bold">
        R$ {{ product.price }}
      </p>
    </template>

    <template #footer>
      <PvButton
        label="Adicionar"
        icon="pi pi-shopping-cart"
        class="w-full"
        @click="$emit('add-to-cart', product)"
      />
    </template>

  </Card>

</template>
