<template>
    <div class="post-detail">
      <h1>Product Detail page: {{ $route.params.name }}</h1>
      <p>Display the content of the post with id of {{ $route.params.id }} here</p>
      <h4>{{ $route.params.category }}</h4>
    <h5> {{ $route.params.price }}</h5>
    <h6>{{ $route.params }}</h6>
    <!-- <img src="  {{$route.params.image.thumbnail}} "></img> -->
      <div>
        <button @click="showPostId">Show post id</button>
      </div>
      <div>
        <button @click="goHome">go home in 3 sec</button>
      </div>
      <div>
        <button @click="goToFirst">go to 1st post</button>
      </div>
      <p><RouterLink to="/product-list"> &lt; Back</RouterLink></p>
    </div>
  </template>
  
  <script setup>
  import {useRoute, useRouter} from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const showPostId = () =>{
    alert(`route id: ${route.params.id}`)
  }
  const goHome = () => {
  setTimeout(() => {
    router.push({name: 'home'})
  }, 3000);
  }
  const goToFirst = () => {
  setTimeout(() => {
    router.push({name: 'productDetail',
      params: {
        id: 'id1'
      }
    })
  }, 3000);
  }
  </script>
  