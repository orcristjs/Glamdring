import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './config/route-config';
import Main from './views/main.vue';
import store from './config/store-config';
import { sync } from 'vuex-router-sync';

Vue.use(VueRouter);
/* eslint-disable no-new */

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend(Main);

// Create a router instance + configs
var router = new VueRouter({
    hashbang: false
    // saveScrollPosition: true,
    // suppressTransitionError: true
});

configRouter(router);
sync(store, router);

// 添加全局前置钩子函数beforeEach
router.beforeEach(function (transition) {
    if (transition.to.path.match(/forbidden/i)) {
        transition.abort();
    } else {
        transition.next();
    }
});

router.afterEach(function ({ to, from }) {
    console.log(from);
    console.log('Hello');
    console.log('router obj is loaded. Path: ' + to.path);
});

/*
router.redirect({
  '*': '/home/index',
  '/home': '/home/index'
})
*/
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');

export default router;
