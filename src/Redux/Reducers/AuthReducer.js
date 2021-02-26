import {AUTH_LOADING, AUTH_FAILED} from '../Actions/LoginAction';
import {
  LOGIN_USER,
  LOGOUT_USER,
  TOKEN_SENT,
  TOKEN_FAILED,
} from '../Actions/types';

const initialState = {
  isLoading: false,
  isSucces: false,
  isError: false,
  errorMessage: null,
  isLoggedIn: false,
  message: '',
  data: null,
  status: false,
  u_id: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: true,
        isSucces: false,
        isError: false,
        errorMessage: null,
      };
    case AUTH_FAILED:
      return {
        ...state,
        isLoading: false,
        isSucces: false,
        isError: true,
        errorMessage: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        message: action.payload.data.message,
        data: action.payload.data.data,
        status: action.payload.data.status,
        u_id: action.payload.data.data.u_id,
        isLoading: false,
        isSucces: true,
        isError: false,
        errorMessage: null,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        data: null,
        isLoading: false,
        isSucces: false,
        isError: false,
        errorMessage: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
