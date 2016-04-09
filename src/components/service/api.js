import {GetMySpaceService} from './resources';

export default {
    getMySpace: function (data) {
        return GetMySpaceService.save('', { 'id': data.id });
    }
};
