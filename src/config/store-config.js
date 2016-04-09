import Vue from 'vue';
import Vuex from 'vuex';
import MySpaceStore from '../store/MySpace/store';

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
Vue.config.debug = debug;

const store = new Vuex.Store({
    modules: {
        MySpaceStore
    },
    strict: debug
});

export default store;
