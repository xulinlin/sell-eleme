import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home/Home'
// import goods from '../views/Home/components/goods/goods.vue'
// import comments from '../views/Home/components/comments/comments.vue'
// import seller from '../views/Home/components/seller/seller.vue'
import Goods from '../views/Goods/Goods.vue'
import Comments from '../views/Comments/Comments.vue'
import Seller from '../views/Seller/Seller'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home,
    //   children: [
    //     { path: 'goods', component: goods },
    //     { path: 'comments', component: comments },
    //     { path: 'seller', component: seller }
    //   ]
    // }
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Comments',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    }
  ]
})
