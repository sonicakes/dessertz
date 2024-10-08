import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ProductList from '../views/ProductList.vue';
import ProductDetailView from '../views/ProductDetail.vue';
// import ModalsView from '../views/Modals.vue';
import Cart from '../views/Cart.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/product-list',
      name: 'product-list',
      component: ProductList,
      props: true
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: ProductDetailView,
      props: true
    },
    // {
    //   path: '/modals',
    //   name: 'modals',
    //   component: ModalsView
    // },
       {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
  ]
})

export default router
