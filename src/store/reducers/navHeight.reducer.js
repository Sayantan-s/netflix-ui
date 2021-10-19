import { NAVHEIGHT_VALUE } from "store/action-types";

const initialState = 0;

export default (state = initialState, { type, payload }) => {
    if (type === NAVHEIGHT_VALUE) return (state = payload);
    return state;
}