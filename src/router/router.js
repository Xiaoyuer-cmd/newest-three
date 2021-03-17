import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        component: () => import( /******** */ '../view/homeentry/homeentry.vue'),
        name: 'homeentry',
        meta: {
            title: '项目入口'
        },
    }]
})