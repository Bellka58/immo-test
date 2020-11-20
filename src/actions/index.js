import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
} from '../constants/actions';

export const userLogInRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

export const userLogInSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

export const userLogInFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const userLogOut = () => ({
  type: USER_LOGOUT,
});

export const newsListRequest = () => ({
  type: NEWS_LIST_REQUEST,
});

export const newsListSuccess = (data) => ({
  type: NEWS_LIST_SUCCESS,
  payload: data,
});