import Vue from 'vue';
import Vuex from 'vuex';
<<<<<<< c4efb7ff95513fcf8a733df104a4a21ac159cc21
import MySpaceStore from '../store/MySpace/store';
=======
// import groups from './modules/groups'
// import quotes from './modules/quotes'
// import interval from './modules/interval'
>>>>>>> update

const debug = process.env.NODE_ENV !== 'production';
Vue.use(Vuex);
Vue.config.debug = debug;

<<<<<<< c4efb7ff95513fcf8a733df104a4a21ac159cc21
const store = new Vuex.Store({
    modules: {
        MySpaceStore
    },
    strict: debug
});

export default store;
=======
export default new Vuex.Store({
    modules: {
        // groups,
        // quotes,
        // interval
    },
    strict: debug
});
>>>>>>> update
