import {
  IUser,
  AuthActionTypes,
  IUserLogin,
  IEmail,
  IResetPassword,
} from "../types/auth";

export const registerUser = (payload: IUser) => ({
  type: AuthActionTypes.REGISTER_USER,
  payload,
});

export const confirmUser = (payload: string) => ({
  type: AuthActionTypes.CONFIRM_USER,
  payload,
});

export const setMessage = (payload: string) => ({
  type: AuthActionTypes.SET_MESSAGE,
  payload,
});

export const loginUser = (payload: IUserLogin) => ({
  type: AuthActionTypes.LOGIN_USER,
  payload,
});

export const sendResetLetter = (payload: IEmail) => ({
  type: AuthActionTypes.SEND_RESET_LETTER,
  payload,
});

export const resetPassword = (payload: IResetPassword) => ({
  type: AuthActionTypes.RESET_PASSWORD,
  payload,
});

export const clearMessage = () => ({
  type: AuthActionTypes.CLEAR_MESSAGE,
});

export const setAccessToken = (payload: string) => ({
  type: AuthActionTypes.SET_ACCESS_TOKEN,
  payload,
});
