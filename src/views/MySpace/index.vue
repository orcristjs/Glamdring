<template>
    <div>
        <Go></Go>
        <h3>MySpace {{ msg }}</h3>
        <div></div>
        <router-view></router-view>
    </div>
</template>
<script>
// import Vue from 'vue';
import Go from '../../components/ui/Header.vue';
import { getMySpace } from '../../store/MySpace/actions';
import { getSpaceData } from '../../store/MySpace/getters';
import Store from '../../config/store-config';

export default {
    Store,
    components: { Go }, // 麻痹的用自定义不解析？？？？
    data () {
        return {
            headerTitle: 'MySpace',
            backFlag: true,
            optFlag: true,
            msg: '紫微宸居'
        };
    },
    events: {
        headerBackHandler: function () {
            window.history.back();
        },
        headerOptHandler: function () {
            Store.router.go({name: 'foo'});
            console.log('my space headerOptions');
        }
    },
    route: {
        activate () {
            this.getMySpace();
            console.log('route', this);
        },
        canActivate () {
            console.log('canActivate');
        }
    },
    vuex: {
        getters: {
            spaces: getSpaceData
        },
        actions: {
            getMySpace
        }
    }
};

</script>
<style>

</style>
