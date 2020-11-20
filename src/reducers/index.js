import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/actions';

const initialState = {
  user: {
    userName: '',
    email: '',
    photoUrl: '',
  },
  isUserLoggedIn: false,
  news: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserLoggedIn: true,
        user: {
          userName: action.payload.name,
          email: action.payload.email,
          photoUrl: action.payload.photoUrl,
        },
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {
          userName: '',
        },
      };
    case NEWS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEWS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
