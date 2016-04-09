<template>
    <div>
        <Go></Go>
        <h3>MySpace {{ msg }}</h3>
        <div></div>
        <router-view></router-view>
    </div>
</template>
<script>
import Go from '../../components/ui/Header.vue';
import { getMySpace } from '../../store/MySpace/actions';
import { getSpaceData } from '../../store/MySpace/getters';

export default {
    components: { Go }, // 麻痹的用自定义不解析？？？？
    data () {
        return {
            msg: '紫微宸居'
        };
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
