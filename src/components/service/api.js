import {GetMySpaceService} from './resources';

export default {
    getMySpace: function (data) {
<<<<<<< 605fb463d27787f1733dc754b9105dc4813438f0
        return GetMySpaceService.save('', { 'id': '001' });
=======
        return GetMySpaceService.save('', { 'id': data.id });
>>>>>>> 增加service
    }
};
