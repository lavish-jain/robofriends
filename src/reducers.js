import { CHANGE_SEARCH_FIELD, GET_ROBOTS_FAILED, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS } from './constants';

const initialStateSearch = {
    searchField: '',
    robots: [],
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                searchField: action.payload,
            };
        default:
            return state;
    }
}
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
}

export const getRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case GET_ROBOTS_PENDING:
            return {
                ...state,
                isPending: true,
            };
        case GET_ROBOTS_SUCCESS:
            return {
                ...state,
                robots: action.payload,
                isPending: false,
            }
        case GET_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload,
            }
        default:
            return state;
    }
}