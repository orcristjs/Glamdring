import {
    GET_MY_SPACE_SUCCESS,
    GET_MY_SPACE_FAILURE
} from '../mutation-types';

const state = {
    spaces: []
};

const mutations = {
    [GET_MY_SPACE_FAILURE] (state) {
        state.spaces = [];
    },
    [GET_MY_SPACE_SUCCESS] (state, action) {
        // let data = filters.filterQuote(action.quotes)
        state.spaces = action.spaces;
    }
};

export default {
    state,
    mutations
};
