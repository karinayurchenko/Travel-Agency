import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GeneralReducers from './reducers/general';
import UserReducer from './reducers/user';
import HotelsReducer from './reducers/hotels';
import ProfileReducer from './reducers/profile';

const reducers = combineReducers({
  general: GeneralReducers,
  user: UserReducer,
  hotels: HotelsReducer,
  profile: ProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
