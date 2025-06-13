import { createStore, combineReducers } from 'redux';
import { cartReducer, checkoutReducer } from './reducers'; // Import your reducers

const rootReducer = combineReducers({
    cart: cartReducer,
    checkout: checkoutReducer
});

const store = createStore(rootReducer);

export default store;