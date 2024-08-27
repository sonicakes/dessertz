<template><h2>Desserts</h2>
<div class="main-content">
<div class="items">
<div v-for="data in json" :key="data.id" class="item">
    <RouterLink :to="{ name: 'productDetail', params: { id: data.id, category: data.category }}">{{ data.name }}</RouterLink>
    <!-- todo - move into product preview -->
    <ProductPrevew :category="data.category" :name="data.name" :price="data.price" :img="data.image.desktop"/>
    </div>
</div>
<div class="cart">Cart is here</div>
</div>
</template>
<script setup>
import json from '../stores/data.json';
import ProductPrevew from '../components/ProductPrevew.vue';
</script>

<style scoped>
.item {
    border: 1px solid plum;
    border-radius: 30px;

}
.items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
.main-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
}
</style>