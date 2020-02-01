import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';


export const middlewares = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// console.log(createStoreWithMiddleware(rootReducer).getState())
export default createStoreWithMiddleware(rootReducer);