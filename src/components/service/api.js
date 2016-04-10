import {GetMySpaceService} from './resources';

export default {
    getMySpace: function (data) {
        return GetMySpaceService.save('', { 'id': '001' });
    }
};
