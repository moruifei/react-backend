import {createStore, combineReducers} from 'redux';
import app from '@/reducer/app';
import user from '@/reducer/user'

const reducers = combineReducers({
    app,
    user
})

const store = createStore(reducers);
export default store;

