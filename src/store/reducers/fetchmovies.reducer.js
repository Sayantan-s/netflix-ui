import { FETCH_MOVIES } from 'store/action-types';

const initialState = {
    NEW_ON_NETFLIX: {
        loading: false,
        data: [],
        error: ''
    },
    COMING_THIS_WEEK: {
        loading: false,
        data: [],
        error: ''
    },
    COMING_NEXT_WEEK: {
        loading: false,
        data: [],
        error: ''
    },
    GET_MOVIE_BY_ID: {
        loading: false,
        data: [],
        error: ''
    }
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_MOVIES.COMING_THIS_WEEK.LOADING:
            return {
                ...state,
                COMING_THIS_WEEK: {
                    loading: true,
                    data: [],
                    error: ''
                }
            };
        case FETCH_MOVIES.COMING_THIS_WEEK.SUCCESS:
            return {
                ...state,
                COMING_THIS_WEEK: {
                    loading: false,
                    data: payload,
                    error: ''
                }
            };
        case FETCH_MOVIES.COMING_THIS_WEEK.ERROR:
            return {
                ...state,
                COMING_THIS_WEEK: {
                    loading: false,
                    data: [],
                    error: payload
                }
            };
        case FETCH_MOVIES.COMING_NEXT_WEEK.LOADING:
            return {
                ...state,
                COMING_NEXT_WEEK: {
                    loading: true,
                    data: [],
                    error: ''
                }
            };
        case FETCH_MOVIES.COMING_NEXT_WEEK.SUCCESS:
            return {
                ...state,
                COMING_NEXT_WEEK: {
                    loading: false,
                    data: payload,
                    error: ''
                }
            };
        case FETCH_MOVIES.COMING_NEXT_WEEK.ERROR:
            return {
                ...state,
                COMING_NEXT_WEEK: {
                    loading: false,
                    data: [],
                    error: payload
                }
            };
        case FETCH_MOVIES.NEW_ON_NETFLIX.LOADING:
            return {
                ...state,
                NEW_ON_NETFLIX: {
                    loading: true,
                    data: [],
                    error: ''
                }
            };
        case FETCH_MOVIES.NEW_ON_NETFLIX.SUCCESS:
            return {
                ...state,
                NEW_ON_NETFLIX: {
                    loading: false,
                    data: payload,
                    error: ''
                }
            };
        case FETCH_MOVIES.NEW_ON_NETFLIX.ERROR:
            return {
                ...state,
                NEW_ON_NETFLIX: {
                    loading: false,
                    data: [],
                    error: payload
                }
            };
        case FETCH_MOVIES.GET_MOVIE_BY_ID.LOADING:
            return {
                ...state,
                GET_MOVIE_BY_ID: {
                    loading: true,
                    data: [],
                    error: ''
                }
            };
        case FETCH_MOVIES.GET_MOVIE_BY_ID.SUCCESS:
            return {
                ...state,
                GET_MOVIE_BY_ID: {
                    loading: false,
                    data: payload,
                    error: ''
                }
            };
        case FETCH_MOVIES.GET_MOVIE_BY_ID.ERROR:
            return {
                ...state,
                GET_MOVIE_BY_ID: {
                    loading: false,
                    data: [],
                    error: payload
                }
            };
        default:
            return state;
    }
};
