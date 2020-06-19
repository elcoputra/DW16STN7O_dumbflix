import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCSESS, GET_MOVIES_ERROR } from '../actionTypes';

const initialState = {
  dataMovies: [],
  loading: false,
  error: '',
};

const movieReducer = (state = initialState, action) => {
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

export default movieReducer;
