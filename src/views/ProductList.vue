<template><h2>product list here</h2>
<div v-for="data in json" class="item">
    <h3>{{ data.name }}</h3>
    <h4>{{ data.category }}</h4>
    <h5> {{ data.price }}</h5>
    <img :src="  data.image.thumbnail "></img>
    </div>
</template>
<script setup>
import json from '../stores/data.json';

</script>

<style scoped>
.item {
    border: 1px solid plum;
}
</style>