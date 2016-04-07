import Vue from 'vue';
import VueRouter from 'vue-router';
import configRouter from './config/route-config';
import Main from './views/main.vue';
import store from './config/store-config';
import { sync } from 'vuex-router-sync';

Vue.use(VueRouter);
/* eslint-disable no-new */

new Vue({
    el: '.title',
    data: {
        message: 'hello vue.js is'
    },
    methods: {
        greet: function (event) {
            // 方法内 `this` 指向 vm
            console.log('Hello ' + this.name + '!');
            // `event` 是原生 DOM 事件
            console.log(event.target.tagName);
        }
    }
});

// var Foo = Vue.extend({
//     template:
//     '<div class="foo">' +
//         '<h2>This is Foo!</h2>' +
//         '<router-view></router-view>' + // <- 嵌套的外链
//     '</div>'
// });

// var Bar = Vue.extend({
//     template:
//         '<p>This is bar!</p>' +
//         '<router-view></router-view>'
// });

// var Baz = Vue.extend({
//     template: '<p>This is baz!</p>'
// });

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

// configRouter(router, Hello);
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
