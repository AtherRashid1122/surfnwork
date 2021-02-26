import axios from 'axios';
import {BASE_URL} from '../BaseUrl';
import {GET_POSTS, TOKEN_FAILED, TOKEN_SENT, GET_NOTIF} from './types';
//static types
export const POST_LOADING = 'POST_LOADING';
export const POST_FAILED = 'POST_FAILED';

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(postLoading());
    try {
      const res = await axios.post(`${BASE_URL}charity`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      dispatch(getPostsSuccess(res));
    } catch (err) {
      dispatch(postFailed(err));
    }
  };
};
export const notifToken = (params) => {
  return async (dispatch) => {
    dispatch(postLoading());
    try {
      const res = await axios.post(`${BASE_URL}user_token`, params, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      dispatch(tokenSuccess(res));
    } catch (err) {
      dispatch(tokenFailed(err));
    }
  };
};
export const getNotif = (data) => {
  console.log(data);
  return async (dispatch) => {
    dispatch(postLoading());
    try {
      const res = await axios.post(`${BASE_URL}notifications`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      dispatch(getNotifSuccess(res));
    } catch (err) {
      dispatch(postFailed(err));
    }
  };
};
const postLoading = () => ({
  type: POST_LOADING,
});
const postFailed = (err) => ({
  type: POST_FAILED,
  payload: err,
});

const getPostsSuccess = (res) => ({
  type: GET_POSTS,
  payload: res,
});
const tokenSuccess = (res) => ({
  type: TOKEN_SENT,
  payload: res,
});
const getNotifSuccess = (res) => ({
  type: GET_NOTIF,
  payload: res,
});
const tokenFailed = (res) => ({
  type: TOKEN_FAILED,
  payload: res,
});
