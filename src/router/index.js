import Vue from 'vue';
import Router from 'vue-router';

const checkOrder = () => import('@/components/checkOrder');
const SubOrder = () => import('@/components/subOrder');
const ListDetail = ()=> import('@/components/ListDetail');

Vue.use(Router);
const $router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'checkOrder',
            component: checkOrder
        },
        {
            path: '/listDetail',
            name: 'listDetail',
            component: ListDetail
        },        
        {
            path: '/suborder',
            name: 'suborder',
            component: SubOrder
        }                           
    ]
})


export default $router;