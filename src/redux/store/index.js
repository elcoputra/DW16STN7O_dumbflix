import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { modalRegisterReducer, modalLoginReducer } from '../reducers/modal_reducer';
import { movieReducer, tvReducer } from '../reducers/movie_reducer';

// global reducer combine
const reducers = combineReducers({
  modalRegisterReducer,
  modalLoginReducer,
  movieReducer,
  tvReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
