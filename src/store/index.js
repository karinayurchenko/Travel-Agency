import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import GeneralReducers from './reducers/general';

const reducers = combineReducers({
  general: GeneralReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
