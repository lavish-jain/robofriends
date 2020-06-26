import { CHANGE_SEARCH_FIELD, GET_ROBOTS_FAILED, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS } from './constants';
import axios from 'axios';

export const setSearchField = text => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text,
    };
};

export const getRobots = () => dispatch => {
    dispatch({ type: GET_ROBOTS_PENDING });
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        dispatch({type: GET_ROBOTS_SUCCESS, payload: response.data});
    }).catch(error => {
        dispatch({type: GET_ROBOTS_FAILED, payload: error});
    })
};
