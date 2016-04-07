<template>
    <G-Header></G-Header>
    <h3>MySpace {{ msg }}</h3>
    <router-view></router-view>
</template>
<script>
import G-Header from '../../components/ui/Header.vue';

export default {
    components: { G-Header },
    data () {
        return {
            msg: '紫微宸居'
        };
    }
};

</script>
<style>

</style>
