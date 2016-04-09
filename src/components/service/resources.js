import Vue from 'vue';
import VueResource from 'vue-resource';
import {API_ROOT} from '../../config/api-config';

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateJSON = true;

Vue.http.interceptors.push({
    request (request) {
        request.headers = request.headers || {};
        console.log(request);
        return request;
    },
    response (response) {
        return response;
    }
});

// export const GetMySpaceService = Vue.resource(API_ROOT + '/spaces.json');
export const GetMySpaceService = Vue.resource(API_ROOT + '/groupRT.php');
