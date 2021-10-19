import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import navHeightReducer from './reducers/navHeight.reducer.js';

const rootReducer = combineReducers({
    navHeight: navHeightReducer
});

const middlewares = [thunk];

const store = compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer);

export default store;
