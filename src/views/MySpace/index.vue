<template>
    <div>
        <Go></Go>
        <h3>MySpace {{ msg }}</h3>
        <router-view></router-view>
    </div>
</template>
<script>
import Go from '../../components/ui/Header.vue';

/*
const Top = Header;
let back = function () {
    console.log('back to Heaven');
};
*/

export default {
    components: { Go }, // 麻痹的用自定义不解析？？？？
    data () {
        return {
            msg: '紫微宸居'
        };
    },
    route: {
        activate () {
            console.log('active');
        },
        canActivate () {
            console.log('canActivate');
        }
    }
};

</script>
<style>

</style>
