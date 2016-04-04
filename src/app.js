import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './Main';

Vue.use(VueRouter);

/* eslint-disable no-new */
/*

new Vue({
  el: 'body',
  components: { Main }
})
*/
// Define some components
var Hello = Vue.extend({
    components: { Main }
});

var Foo = Vue.extend({
    template:
    '<div class="foo">' +
        '<h2>This is Foo!</h2>' +
        '<router-view></router-view>' + // <- 嵌套的外链
    '</div>'
});

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
});

var Baz = Vue.extend({
    template: '<p>This is baz!</p>'
});

// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({});

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter();

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/foo': {
        component: Foo,
        // 在/foo下设置一个子路由
        subRoutes: {
            '/': {
                // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                // 为了简便，这里使用了一个组件的定义
                component: {
                    template: '<p>Default sub view for Foo</p>'
                }
            },
            '/bar': {
                // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
                // 一个Bar组件
                component: Bar
            },
            '/baz': {
                // Baz也是一样，不同之处是匹配的路由会是/foo/baz
                component: Baz
            }
        }
    },
    '/bar': {
        component: Bar
    },
    '/hello': {
        component: Hello
    }
});
console.log(router);
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
