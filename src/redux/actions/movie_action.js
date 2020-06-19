import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCSESS,
  GET_MOVIES_ERROR,
  GET_TV_REQUEST,
  GET_TV_SUCCSESS,
  GET_TV_ERROR,
  GET_DETAIL_MOVIE_SUCCSESS,
  GET_DETAIL_MOVIE_ERROR,
  GET_DETAIL_MOVIE_REQUEST,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

// export const getDataMovie = () => async (dispatch) => {
//   dispatch({
//     type: GET_MOVIES_REQUEST,
//   });
//   try {
//     const response = await API.get('/movies');
//     dispatch({
//       type: GET_MOVIES_SUCCSESS,
//       payload: response.data.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_MOVIES_ERROR,
//       payload: error,
//     });
//   }
// };
export function getDataMovie() {
  return function (dispatch) {
    dispatch({
      type: GET_MOVIES_REQUEST,
    });
    API.get('/category/1/movies')
      .then((response) => dispatch({ type: GET_MOVIES_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_MOVIES_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getDataTv() {
  return function (dispatch) {
    dispatch({
      type: GET_TV_REQUEST,
    });
    API.get('/category/2/movies')
      .then((response) => dispatch({ type: GET_TV_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_TV_ERROR,
          payload: response.error,
        }),
      );
  };
}
export function getDetailMovie(idMovie) {
  return function (dispatch) {
    dispatch({
      type: GET_DETAIL_MOVIE_REQUEST,
    });
    API.get('/movie/' + idMovie)
      .then((response) => dispatch({ type: GET_DETAIL_MOVIE_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_DETAIL_MOVIE_ERROR,
          payload: response.error,
        }),
      );
  };
}
