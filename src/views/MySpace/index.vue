<template>
    <Go></Go>
    <h3>MySpace {{ msg }}</h3>
    <router-view></router-view>
</template>
<script>
import Header from '../../components/ui/Header.vue';

const Go = Header;
/*
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
    }
};

</script>
<style>

</style>
