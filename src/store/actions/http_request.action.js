import { HTTP_ACTIONS } from 'store/action-types';
import { http } from 'utils';

export const loading_action = ({ type = HTTP_ACTIONS.LOADING }) => ({ type });

export const success_action = ({ type = HTTP_ACTIONS.SUCCESS, data = [] }) => ({
    type,
    payload: data
});

export const error_action = ({ type = HTTP_ACTIONS.ERROR, error = '' }) => ({
    type,
    payload: error
});

export const request_handler =
    ({ url }) =>
    async (dispatch) => {
        dispatch(loading_action({}));
        try {
            const res = await http({ url });
            dispatch(success_action({ data: res }));
        } catch (error) {
            dispatch(error_action({ error }));
        }
    };
