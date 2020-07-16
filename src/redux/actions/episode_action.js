import {
  ADD_EPISODES_ERROR,
  ADD_EPISODES_REQUEST,
  ADD_EPISODES_SUCCSESS,
  GET_EPISODE_BY_MOVIE_ERROR,
  GET_EPISODE_BY_MOVIE_SUCCSESS,
  GET_EPISODE_BY_MOVIE_REQUEST,
  DELETE_EPISODE_BY_MOVIE_REQUEST,
  DELETE_EPISODE_BY_MOVIE_SUCCESS,
  DELETE_EPISODE_BY_MOVIE_ERROR,
  CLEAR_UPDATE_DETAIL_MOVIE_MESSAGE,
  CLEAR_UPDATE_DETAIL_MOVIE_ERROR,
} from '../actionTypes';
import { API } from '../../config/axiosConfig';

export function addDataEpisodes(movieId, bulkEpisodes) {
  return function (dispatch) {
    var result = bulkEpisodes.map(function (o) {
      o.movieId = movieId;
      return o;
    });

    console.log({ result: result });
    dispatch({
      type: ADD_EPISODES_REQUEST,
      payload: true,
    });
    API.post('/episodes', result)
      .then((response) =>
        dispatch({
          type: ADD_EPISODES_SUCCSESS,
          payload: response.data,
        }),
      )
      .catch((response) =>
        dispatch({
          type: ADD_EPISODES_ERROR,
          payload: response.error,
        }),
      );
  };
}
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

// Delete song async await
export function deleteEpisodeAction(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELETE_EPISODE_BY_MOVIE_REQUEST,
      });
      const response = await API.delete('/episode/' + id);
      dispatch({
        type: DELETE_EPISODE_BY_MOVIE_SUCCESS,
        payload: response.data.message,
      });
    } catch (error) {
      dispatch({
        type: DELETE_EPISODE_BY_MOVIE_ERROR,
        payload: error.response.data.error,
      });
    }
  };
}

export function clearMessageDeleteSongAction() {
  return function (dispatch) {
    dispatch({ type: CLEAR_UPDATE_DETAIL_MOVIE_MESSAGE });
  };
}

export function clearErrorDeleteSongAction() {
  return function (dispatch) {
    dispatch({ type: CLEAR_UPDATE_DETAIL_MOVIE_ERROR });
  };
}
