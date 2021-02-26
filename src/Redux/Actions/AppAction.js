import axios from 'axios';
import {BASE_URL} from '../BaseUrl';
import {LOGIN_USER, REGISTER_USER, LOGOUT_USER} from './types';
//static types
export const AUTH_LOADING = 'AUTH_LOADING';
export const AUTH_FAILED = 'AUTH_FAILED';

export const getjobs = (params) => {
  console.log(params);

  return async (dispatch) => {
    dispatch(authloding());
    try {
      const res = await axios.post(
        `${BASE_URL}Authentication/get_jobs`,
        params,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );

      //   if (res & (res.data.status === false))
      //     return dispatch(authfailed(res.data.message));
      //   dispatch(loginscreen(res));
      console.log(res);
    } catch (err) {
      dispatch(authfailed(err));
    }
  };
};

const authloding = () => ({
  type: AUTH_LOADING,
});
const authfailed = (err) => ({
  type: AUTH_FAILED,
  payload: err,
});
const loginscreen = (res) => ({
  type: LOGIN_USER,
  payload: res,
});
export const logoutUserSuccess = () => ({
  type: LOGOUT_USER,
});
