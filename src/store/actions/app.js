import { SET_LOADING } from '../constants';

export const setloading = (value) => {
    return {
        type: SET_LOADING,
        value
    }
}