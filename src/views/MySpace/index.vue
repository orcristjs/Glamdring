<template>
<<<<<<< a0ca1daca63002de3c87b1ed2d9acc7c8f6d273c
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
=======
    <G-Header></G-Header>
    <h3>MySpace {{ msg }}</h3>
    <router-view></router-view>
</template>
<script>
import G-Header from '../../components/ui/Header.vue';

export default {
    components: { G-Header },
>>>>>>> views-ui
    data () {
        return {
            msg: '紫微宸居'
        };
<<<<<<< a0ca1daca63002de3c87b1ed2d9acc7c8f6d273c
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
=======
>>>>>>> views-ui
    }
};

</script>
<style>

</style>
