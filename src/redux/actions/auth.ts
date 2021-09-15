import { IUser, AuthActionTypes, IUserLogin } from '../types/auth';

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
