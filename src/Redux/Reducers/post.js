import {POST_FAILED, POST_LOADING} from '../Actions/post';
import {GET_POSTS, TOKEN_FAILED, TOKEN_SENT, GET_NOTIF} from '../Actions/types';

const initialState = {
  isLoading: false,
  isSucces: false,
  isError: false,
  errorMessage: null,
  isLoggedIn: false,
  message: '',
  Userdata: null,
  status: false,
  postData: null,
  tokenRes: '',
  notification: null,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,

        isLoading: false,
        isSucces: true,
        isError: false,
      };
    case POST_FAILED:
      return {
        ...state,
        message: action.payload.data.message,

        status: action.payload.data.status,
        isLoading: false,
        isSucces: false,
        isError: true,
        errorMessage: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        message: action.payload.data.message,
        postData: action.payload.data.data,
        status: action.payload.data.status,
        isLoading: false,
        isSucces: true,
        isError: false,
        errorMessage: null,
      };
    case GET_NOTIF:
      return {
        ...state,
        message: action.payload.data.message,
        status: action.payload.data.status,
        notification: action.payload.data.data,
        isLoading: false,
        isSucces: true,
        isError: false,
        errorMessage: null,
      };
    case TOKEN_SENT:
      return {
        ...state,

        tokenRes: action.payload.data.message,
        isLoading: false,
        isSucces: true,
        isError: false,
        errorMessage: null,
      };
    case TOKEN_FAILED:
      return {
        ...state,

        tokenRes: action.payload.data.message,
        isLoading: false,
        isSucces: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
