import {GetMySpaceService} from './resources';

export default {
    getMySpace: function (data) {
<<<<<<< 29f083a2d55e7ba30d3585f81f7dabcfc824f03d
        return GetMySpaceService.save('', { 'id': '001' });
=======
        return GetMySpaceService.save('', { 'id': data.id });
>>>>>>> 增加service
    }
};
