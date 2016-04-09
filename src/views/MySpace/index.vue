<template>
<<<<<<< a0ca1daca63002de3c87b1ed2d9acc7c8f6d273c
    <div>
<<<<<<< c4efb7ff95513fcf8a733df104a4a21ac159cc21
<<<<<<< 9447d0b4e671872f5cbb7cdd7ac68a683e9b62e3
        <Go></Go>
=======
        <Head></Head>
>>>>>>> main layout
=======
        <Go></Go>
>>>>>>> update
        <h3>MySpace {{ msg }}</h3>
        <div></div>
        <router-view></router-view>
    </div>
</template>
<script>
<<<<<<< c4efb7ff95513fcf8a733df104a4a21ac159cc21
<<<<<<< 9447d0b4e671872f5cbb7cdd7ac68a683e9b62e3
import Go from '../../components/ui/Header.vue';
import { getMySpace } from '../../store/MySpace/actions';
import { getSpaceData } from '../../store/MySpace/getters';
=======
import Head from '../../components/ui/Header.vue';
>>>>>>> main layout
=======
import Go from '../../components/ui/Header.vue';
<<<<<<< 29f083a2d55e7ba30d3585f81f7dabcfc824f03d
>>>>>>> update

export default {
    components: { Go }, // 麻痹的用自定义不解析？？？？
=======
    <G-Header></G-Header>
    <h3>MySpace {{ msg }}</h3>
    <router-view></router-view>
</template>
<script>
import G-Header from '../../components/ui/Header.vue';
=======
import {getMySpace} from '../../store/MySpace/actions';
import {getSpacesData} from '../../store/MySpace/getters';
>>>>>>> 增加service

export default {
<<<<<<< c4efb7ff95513fcf8a733df104a4a21ac159cc21
<<<<<<< 9447d0b4e671872f5cbb7cdd7ac68a683e9b62e3
    components: { G-Header },
>>>>>>> views-ui
=======
    components: { Head }, // 麻痹的用自定义不解析？？？？
>>>>>>> main layout
=======
    components: { Go }, // 麻痹的用自定义不解析？？？？
>>>>>>> update
    data () {
        return {
            msg: '紫微宸居'
        };
<<<<<<< a0ca1daca63002de3c87b1ed2d9acc7c8f6d273c
    },
    route: {
        activate () {
            this.getMySpace();
<<<<<<< 29f083a2d55e7ba30d3585f81f7dabcfc824f03d
=======
            console.log('active');
>>>>>>> 增加service
        },
        canActivate () {
            console.log('canActivate');
        }
    },
    vuex: {
        getters: {
<<<<<<< 29f083a2d55e7ba30d3585f81f7dabcfc824f03d
            spaces: getSpaceData
=======
            spaces: getSpacesData
>>>>>>> 增加service
        },
        actions: {
            getMySpace
        }
<<<<<<< 29f083a2d55e7ba30d3585f81f7dabcfc824f03d
=======
>>>>>>> views-ui
=======
>>>>>>> 增加service
    }
};

</script>
<style>

</style>
