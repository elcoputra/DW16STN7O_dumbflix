import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { modalRegisterReducer, modalLoginReducer } from '../reducers/modal_reducer';
import { movieReducer, tvReducer, detailMovieReducer } from '../reducers/movie_reducer';
import { episodeReducer } from '../reducers/episode_reducer';
import { userReducer } from '../reducers/account_reducer';
import { authReducer } from '../reducers/auth_reducer';
import { upgradeReducer } from '../reducers/upgrade_reducer';

// global reducer combine
const reducers = combineReducers({
  modalRegisterReducer,
  modalLoginReducer,
  movieReducer,
  tvReducer,
  detailMovieReducer,
  episodeReducer,
  userReducer,
  authReducer,
  upgradeReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
