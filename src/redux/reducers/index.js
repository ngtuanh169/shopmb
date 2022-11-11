import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toastMessage from './toastMessage';
import cart from './cart';
import user from './user';

const cartPersistConfig = {
    key: 'cartShopMB',
    storage,
};
const userPersistConfig = {
    key: 'userShopMB',
    storage,
};
const rootReducer = combineReducers({
    toastMessage,
    cart: persistReducer(cartPersistConfig, cart),
    // user: persistReducer(userPersistConfig, user),
    user,
});

export default rootReducer;
