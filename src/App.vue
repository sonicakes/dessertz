<template>
  <div class="content">
  <h1>Hello Dessertz App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/" class="link">Go to Home</RouterLink>
    <RouterLink to="/product-list" class="link">Product List</RouterLink>
    <RouterLink to="/cart" class="link">Go to Cart</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</div>
</template>

<style scoped>
@font-face {
  font-family: redhat;
  src: url("assets/fonts/static/RedHatText-Regular.ttf");
}
.link {
  color: navy;
  padding: 10px;
}
.content {
  display: flex;
  justify-content: center;
  font-family: redhat;
  flex-direction: column;
}
</style>
