export enum AuthActionTypes {
  REGISTER_USER = "REGISTER_USER",
  CONFIRM_USER = "CONFIRM_USER",
  SET_MESSAGE = "SET_MESSAGE",
  LOGIN_USER = "LOGIN_USER",
}

export interface IUser {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export interface IUserLogin {
  username: string;
  password: string;
}
export interface IAuth {
  message?: string;
  token?: string;
}

export interface IRegisterAction {
  type: AuthActionTypes.REGISTER_USER;
  payload: IUser;
}

export interface IConfirmUserAction {
  type: AuthActionTypes.CONFIRM_USER;
  payload: string;
}

export interface ISetMessageAction {
  type: AuthActionTypes.SET_MESSAGE;
  payload: string;
}

export interface ILoginUserAction {
  type: AuthActionTypes.LOGIN_USER;
  payload: IUserLogin;
}

export type AuthAction = IRegisterAction | IConfirmUserAction | ISetMessageAction | ILoginUserAction;
