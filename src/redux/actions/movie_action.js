import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCSESS, GET_MOVIES_ERROR } from '../actionTypes';
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
    API.get('/movies')
      .then((response) => dispatch({ type: GET_MOVIES_SUCCSESS, payload: response.data.data }))
      .catch((response) =>
        dispatch({
          type: GET_MOVIES_ERROR,
          payload: response.error,
        }),
      );
  };
}
