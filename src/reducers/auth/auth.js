import {  
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  ADDUSER_SUCCESS
 } from '../../action/auth';

const InitalState = {
  isLoading: false,
  isLoggedin: false,
  isRegistered: false,
  user: null,
  userData:null
};

export const authReducer = function (state = InitalState, action) {

  switch (action.type) {
    case SIGN_IN_ERROR:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: true, user: action.payload });
    case SIGN_OUT_ERROR:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case SIGN_OUT_SUCCESS:
      return Object.assign({}, state, { isLoading: false, isLoggedin: false, user: null });
    case REGISTER_ERROR:
      return Object.assign({}, state, { isLoading: false });
          case ADDUSER_SUCCESS:
      return Object.assign({}, state, {isLoading: false, isRegistered: true ,user: action});
    default:
      return state;
  }
}

