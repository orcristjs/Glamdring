<template>
    <div>
        <Go></Go>
        <!--
        <h1 class="title" v-text="message" v-on:click="greet"></h1>
        -->
        <!-- use v-link directive for navigation. -->
        <p class="main">
            <a v-link="'home'">Home</a>
            <!-- if route View is onload .v-link-active will be inject -->
            <!-- and the classname also can be rename  -->
            <a v-link="{ path: '/foo', activeClass: 'custom-active-class' }">Go to Foo</a>
            <!-- 具名路由 同时支持 router.go({name: 'one_piece', params: {barID: 001}) -->
            <a v-link="{ name: 'one_piece', params: {barID: '001'} }">Go to Bar: One Piece</a>
            <a v-link="{ path: '/user/boyang' }">Go to User: Boyang</a>
        </p>
        <p>
            <a v-link="{ name: 'mySpace'}">My Space</a>
        </p>
        <!-- use router-view element as route outlet -->
        <!-- important -->
        <router-view class="view" transition="expand" transition-mode="out-in"></router-view>
    </div>
</template>
<script>
import store from '../config/store-config';
import Go from '../components/ui/Header.vue';

export default {
    components: { Go }, // 麻痹的用自定义不解析？？？？
    store
};
</script>
<style>
.main {
    position: relative;;
    top: 44px;
}
/* 必需 */
.expand-transition {
    transition: all .3s ease;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
    height: 0;
    padding: 0 10px;
    opacity: 0;
}
</style>
