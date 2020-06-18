import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import { modalRegisterReducer, modalLoginReducer } from '../reducers/modal_reducer';

// global reducer combine
const reducers = combineReducers({
  rootReducer,
  modalRegisterReducer,
  modalLoginReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(promise)));

export default store;
