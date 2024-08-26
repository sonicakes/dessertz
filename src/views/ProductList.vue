<template><h2>Desserts</h2>
<div class="items">
<div v-for="data in json" :key="data.id" class="item">
    <RouterLink :to="`/productDetail/${data.id}`">{{ data.name }}</RouterLink>
    <!-- todo - move into product preview -->
    <!-- <ProductPreview /> -->
    <h4>{{ data.category }}</h4>
    <h5> {{ data.price }}</h5>
    <img :src="  data.image.thumbnail "></img>
    </div>
</div>
</template>
<script setup>
import json from '../stores/data.json';

</script>

<style scoped>
.item {
    border: 1px solid plum;
}
.items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}
</style>