<template>
    <div class="product-detail">
      <h1>Product Detail page: {{ $route.params.name }}</h1>
      <p>Display the content of the post with id of {{ $route.params.id }} here</p>
      <!-- 
    <h5> {{ $route.params.price }}</h5>
    <h6>{{ $route.params }}</h6> -->
    <!-- <img src="  {{$route.params.image.thumbnail}} "></img> -->
    <h4>{{ $route.params.category }}</h4> 
      <p><RouterLink to="/product-list"> &lt; Back</RouterLink></p>
    </div>
  </template>
  
  <script setup>
  import {useRoute, useRouter} from 'vue-router';
  
  const props = defineProps({
    props: ["id", "category"],
  
})
  const route = useRoute();
  const router = useRouter();
  
 
  const goHome = () => {
  setTimeout(() => {
    router.push({name: 'home'})
  }, 3000);
  }

  </script>
  