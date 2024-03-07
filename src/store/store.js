import { legacy_createStore as createStore, combineReducers } from 'redux';
import { jokesReducer } from './Jokes/Jokes-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;