import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import ProductList from '../views/ProductList.vue';
// import PostDetailView from '../views/PostDetail.vue';
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
      component: ProductList
    },
    // {
    //   path: '/postDetail/:id',
    //   name: 'postDetail',
    //   component: PostDetailView
    // },
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
