<template>
  <h1>{{ msg }}</h1>
  <ProductList />
</template>

<script setup>
import ProductList from './ProductList.vue';

defineProps({
  msg: String,
})

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
