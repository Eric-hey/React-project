import {createStore, applyMiddleware} from 'redux';
import Usermessage from './usermessge/reducer'
import thunk from 'redux-thunk';

let store = createStore(
    Usermessage,
    applyMiddleware(thunk)
);
export default store