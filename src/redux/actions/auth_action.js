import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCSESS } from '../actionTypes';
import { API, setAuthToken } from '../../config/axiosConfig';

export function authAction(input) {
  return function (dispatch) {
    const token = localStorage.token;
    setAuthToken(token);
    dispatch({
      type: AUTH_REQUEST,
      payload: true,
    });
    API.get('/auth')
      .then((response) =>
        dispatch({
          type: AUTH_SUCCSESS,
          payload: response.data.data,
        }),
      )
      .catch((error) =>
        dispatch({
          type: AUTH_ERROR,
          payload: error.response,
        }),
      );
  };
}
