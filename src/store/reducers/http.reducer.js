import { HTTP_ACTIONS } from 'store/action-types';

const initialState = {
    loading: false,
    data: undefined,
    error: ''
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case HTTP_ACTIONS.LOADING:
            return {
                ...state,
                loading: true,
                data: undefined,
                error: ''
            };
        case HTTP_ACTIONS.SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                error: ''
            };
        case HTTP_ACTIONS.ERROR:
            return {
                ...state,
                loading: false,
                data: undefined,
                error: payload
            };
        default:
            return state;
    }
};
