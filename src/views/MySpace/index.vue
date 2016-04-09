<template>
    <div>
        <Go></Go>
        <h3>MySpace {{ msg }}</h3>
        <router-view></router-view>
    </div>
</template>
<script>
import Go from '../../components/ui/Header.vue';
import {getMySpace} from '../../store/MySpace/actions';
import {getSpacesData} from '../../store/MySpace/getters';

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
            console.log('active');
        },
        canActivate () {
            console.log('canActivate');
        }
    },
    vuex: {
        getters: {
            spaces: getSpacesData
        },
        actions: {
            getMySpace
        }
    }
};

</script>
<style>

</style>
