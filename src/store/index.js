import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GeneralReducers from './reducers/general';
import UserReducer from './reducers/user';
import HotelsReducer from './reducers/hotels';
import ProfileReducer from './reducers/profile';
import NewHotelsReducer from './reducers/newHotel';

const reducers = combineReducers({
  general: GeneralReducers,
  user: UserReducer,
  hotels: HotelsReducer,
  newHotel: NewHotelsReducer,
  profile: ProfileReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
