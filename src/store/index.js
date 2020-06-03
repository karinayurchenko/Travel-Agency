import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GeneralReducers from './reducers/general';
import UserReducer from './reducers/user';

const reducers = combineReducers({
  general: GeneralReducers,
  user: UserReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
