/**
Module-Actions
*/
import * as Type from '../mutation-types';
import Service from '../../components/service/api';

export const getMySpace = ({dispatch}) => {
    // dispatch(Type.GET_MY_SPACE_SUCCESS);
    Service.getMySpace().then(resp => {
        dispatch(Type.GET_MY_SPACE_SUCCESS, { spaces: resp.data });
    }, resp => {
        dispatch(Type.GET_MY_SPACE_FAILURE);
    });
};
