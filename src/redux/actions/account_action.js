import { LOGIN_SUCCSESS, LOGIN_REQUEST, LOGIN_ERROR, REGISTER_REQUEST, REGISTER_SUCCSESS, REGISTER_ERROR } from '../actionTypes';
import { API, setAuthToken } from '../../config/axiosConfig';
import { closeModalLogin } from '../actions/modal_actions';
import { authAction } from '../actions/auth_action';

export function loginAction(input) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
      payload: true,
    });
    API.post('/login', input)
      .then((response) =>
        dispatch(
          {
            type: LOGIN_SUCCSESS,
            payload: response.data.data,
          },
          localStorage.setItem('token', response.data.data[0].token),
          setAuthToken(response.data.data[0].token),
          dispatch(closeModalLogin()),
          dispatch(authAction()),
        ),
      )
      .catch((error) =>
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response,
        }),
      );
  };
}