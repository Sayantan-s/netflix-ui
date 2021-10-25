import { HTTP_ACTIONS } from 'store/action-types';
import { http } from 'utils';

export const loading_action = ({ type = HTTP_ACTIONS.LOADING }) => ({ type });

export const success_action = ({ type = HTTP_ACTIONS.SUCCESS, data = [] }) => ({
    type,
    payload : data
});

export const error_action = ({ type = HTTP_ACTIONS.ERROR, error = '' }) => ({
    type,
    payload: error
});

export const request_handler =
    ({ url, loading_type, success_type, error_type }) =>
    async (dispatch) => {
        let res;
        dispatch(loading_action({ type: loading_type }));
        try {
            res = await http({ url });
            setTimeout(() => {
                // Used setTimeout for a better UX.
                if (Object.keys(res).includes('success') && !res.success) {
                    return dispatch(error_action({ type: error_type, error: res?.status_message }));
                }
                dispatch(success_action({ type: success_type, data: res }));
            }, 1000);
        } catch (error) {
            dispatch(error_action({ type: error_type, error })); // The fetch api does'nt return the error
        }
    };
