import { IAuth, AuthAction, AuthActionTypes } from "../types/auth";

type stateTasks = IAuth;

const initialState: stateTasks = {};

const auth = (state = initialState, action: AuthAction): stateTasks => {
  switch (action.type) {
    case AuthActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case AuthActionTypes.REGISTER_USER:
      return {
        ...state,
        message: "",
      };
    case AuthActionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };

    case AuthActionTypes.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
