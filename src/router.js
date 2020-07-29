 /* jshint esversion: 6 */ 
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Index from './components/index.vue';
import Product from './components/product.vue';
import Detail from './components/detail.vue';
import Cart from './components/cart';
import Order from './components/order';
import OrderConfirm from './components/orderConfirm';
import OrderList from './components/orderList';
import OrderPay from './components/orderPay';
Vue.use(Router);
export default new Router({
routes:[{
    path:'/',
    name:'home',
    component:Home,
    children:[
        {
        path:'/index',
        name:'index',
        component:Index,
    },
    {
        path:'/product/:id',
        name:'product',
        component:Product,
    },
    {
        path:'/detail/:id',
        name:'detail',
        component:Detail,
    }]
},
{
    path:'/cart',
    name:'cart',
    component:Cart,
},
]

});