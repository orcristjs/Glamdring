export function configRouter (router, Hello) {
    // normal routes
    router.map({
        '/foo': {
            component: require('./components/ui/Foo.vue'),
            // custom key in $router
            auth: 'Boyang',
            // 在/foo下设置一个子路由
            subRoutes: {
                '/': {
                    // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                    // 为了简便，这里使用了一个组件的定义
                    auth: 'ShangBoyang', // sub routerObj will re-write the param
                    user: 'yang8701@gmail.com',
                    component: {
                        template: '<p>Default sub view for Foo</p>' +
                            '<h5>Path: {{ $route.path }}</h5>' +
                            '<h5>Auth: {{ $route.auth }}</h5>' +
                            '<h5>User: {{ $route.user }}</h5>' +
                            '<h5>Query: {{ $route.query | json }}</h5>' +
                            '<h5>Params: {{ $route.params | json }}</h5>' +
                            '<a v-link="{ path: \'baz\', append: true, activeClass: \'custom-active-class\' }">Go to Baz</a>'
                    }
                },
                '/baz': {
                    // 当匹配到/foo/baz时，会在Foo's <router-view>内渲染
                    component: require('./components/ui/Baz.vue')
                }
            }
        },
        '/user/:username': {
            component: {
                // 动态参数 msgs in $route.params
                template: '<p>username: <b>{{ $route.params.username }}</b></p>'
            }
        },
        '/bar': {
            component: require('./components/ui/Bar.vue'),
            subRoutes: {
                '/:barID': {
                    name: 'one_piece',
                    component: {
                        template: '<h5>This is the Bar with the barID:<span style="color: red">{{ $route.params.barID}}</span></h5>'
                    }
                }
            }
        },
        '/hello': {
            component: Hello
        }
    });
}
