<template>
    <div>
        <Go></Go>
        <h3>MySpace {{ msg }}</h3>
        <div></div>
        <router-view></router-view>
    </div>
</template>
<script>
<<<<<<< f1fcf60fe5414ea9977523110be2af9815555dab
// import Vue from 'vue';
import Go from '../../components/ui/Header.vue';
import { getMySpace } from '../../store/MySpace/actions';
import { getSpaceData } from '../../store/MySpace/getters';
import Store from '../../config/store-config';

console.log(Store);
=======
import Go from '../../components/ui/Header.vue';
>>>>>>> update

/*
const Go = Vue.extends({
    data: {

    },
    methods: {
        backHandler: function () {
            console.log('dddd');
        }
    }
});
*/
export default {
<<<<<<< f1fcf60fe5414ea9977523110be2af9815555dab
    Store,
=======
>>>>>>> update
    components: { Go }, // 麻痹的用自定义不解析？？？？
    data () {
        return {
            headerTitle: 'MySpace',
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
