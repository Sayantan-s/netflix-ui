import { HTTP_ACTIONS } from "store/action-types";
import { http } from "utils";

export const loading_action = () => ({
    type : HTTP_ACTIONS.LOADING
})

export const success_action = ({ data = [] }) => ({
    type : HTTP_ACTIONS.SUCCESS,
    payload: data
})

export const error_action = ({ error = '' }) => ({
    type : HTTP_ACTIONS.SUCCESS,
    payload: error
})

export const request_handler = ({ url }) => async dispatch => {
    dispatch(loading_action());
    try {
        const res = await http({ url })
        dispatch(success_action({ data: res }))
    }
    catch(error){
        dispatch(error_action({ error }))
    }
}