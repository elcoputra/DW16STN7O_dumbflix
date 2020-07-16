import {
  GET_EPISODE_BY_MOVIE_ERROR,
  GET_EPISODE_BY_MOVIE_SUCCSESS,
  GET_EPISODE_BY_MOVIE_REQUEST,
  ADD_EPISODES_ERROR,
  ADD_EPISODES_REQUEST,
  ADD_EPISODES_SUCCSESS,
  DELETE_EPISODE_BY_MOVIE_REQUEST,
  DELETE_EPISODE_BY_MOVIE_SUCCESS,
  DELETE_EPISODE_BY_MOVIE_ERROR,
  CLEAR_DELETE_EPISODE_BY_MOVIE_MESSAGE,
  CLEAR_DELETE_EPISODE_BY_MOVIE_ERROR,
} from '../actionTypes';

const initialStateAddEpisode = {
  dataEpisode: [],
  loadingEpisode: false,
  errorEpisode: '',
};

export const episodeAddReducer = (state = initialStateAddEpisode, action) => {
  switch (action.type) {
    case ADD_EPISODES_REQUEST:
      return {
        ...state,
        loadingEpisode: true,
      };
    case ADD_EPISODES_SUCCSESS:
      return {
        ...state,
        loadingEpisode: false,
        dataEpisode: action.payload,
      };
    case ADD_EPISODES_ERROR:
      return {
        ...state,
        loadingEpisode: false,
        errorEpisode: action.payload,
      };
    default:
      return state;
  }
};

const initialStateEpisode = {
  dataEpisode: [],
  loadingEpisode: false,
  errorEpisode: '',
};

export const episodeReducer = (state = initialStateEpisode, action) => {
  switch (action.type) {
    case GET_EPISODE_BY_MOVIE_REQUEST:
      return {
        ...state,
        loadingEpisode: true,
      };
    case GET_EPISODE_BY_MOVIE_SUCCSESS:
      return {
        ...state,
        loadingEpisode: false,
        dataEpisode: action.payload,
      };
    case GET_EPISODE_BY_MOVIE_ERROR:
      return {
        ...state,
        loadingEpisode: false,
        errorEpisode: action.payload,
      };
    default:
      return state;
  }
};

// Delete episode
const initialDeleteEpisode = {
  loadingDeleteEpisode: false,
  messageDeleteEpisodeBool: false,
  errorDeleteEpisodeBool: false,
  messageDeleteEpisode: '',
  errorDeleteEpisode: '',
};

export const deleteEpisodeReducer = (state = initialDeleteEpisode, action) => {
  switch (action.type) {
    case DELETE_EPISODE_BY_MOVIE_REQUEST:
      return {
        ...state,
        loadingDeleteEpisode: true,
      };
    case DELETE_EPISODE_BY_MOVIE_SUCCESS:
      return {
        ...state,
        loadingDeleteEpisode: false,
        messageDeleteEpisodeBool: true,
        messageDeleteEpisode: action.payload,
      };
    case DELETE_EPISODE_BY_MOVIE_ERROR:
      return {
        ...state,
        errorDeleteEpisodeBool: true,
        loadingDeleteEpisode: false,
        errorDeleteEpisode: action.payload,
      };
    case CLEAR_DELETE_EPISODE_BY_MOVIE_MESSAGE:
      return {
        ...state,
        messageDeleteEpisodeBool: false,
        messageDeleteEpisode: '',
      };
    case CLEAR_DELETE_EPISODE_BY_MOVIE_ERROR:
      return {
        ...state,
        errorDeleteEpisodeBool: false,
        errorDeleteEpisode: '',
      };
    default:
      return state;
  }
};
