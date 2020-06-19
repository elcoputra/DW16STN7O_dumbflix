import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCSESS,
  GET_MOVIES_ERROR,
  GET_TV_REQUEST,
  GET_TV_SUCCSESS,
  GET_TV_ERROR,
} from '../actionTypes';

const initialState = {
  dataMovies: [],
  dataTvSeries: [],
  loading: false,
  error: '',
  loadingTV: false,
  errorTV: '',
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCSESS:
      return {
        ...state,
        loading: false,
        dataMovies: action.payload,
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TV_REQUEST:
      return {
        ...state,
        loadingTV: true,
      };
    case GET_TV_SUCCSESS:
      return {
        ...state,
        loadingTV: false,
        dataTvSeries: action.payload,
      };
    case GET_TV_ERROR:
      return {
        ...state,
        loadingTV: false,
        errorTV: action.payload,
      };
    default:
      return state;
  }
};
