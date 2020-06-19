import { GET_EPISODE_BY_MOVIE_ERROR, GET_EPISODE_BY_MOVIE_SUCCSESS, GET_EPISODE_BY_MOVIE_REQUEST } from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function getDataEpisodes(movieId) {
  return function (dispatch) {
    dispatch({
      type: GET_EPISODE_BY_MOVIE_REQUEST,
      payload: true,
    });
    API.get('/movie/' + movieId + '/episodes')
      .then((response) =>
        dispatch({
          type: GET_EPISODE_BY_MOVIE_SUCCSESS,
          payload: response.data.data,
        }),
      )
      .catch((response) =>
        dispatch({
          type: GET_EPISODE_BY_MOVIE_ERROR,
          payload: response.error,
        }),
      );
  };
}
