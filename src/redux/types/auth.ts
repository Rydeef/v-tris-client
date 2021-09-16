export enum AuthActionTypes {
  REGISTER_USER = "REGISTER_USER",
  CONFIRM_USER = "CONFIRM_USER",
  SET_MESSAGE = "SET_MESSAGE",
  LOGIN_USER = "LOGIN_USER",
  SEND_RESET_LETTER = "SEND_RESET_LETTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  CLEAR_MESSAGE = "CLEAR_MESSAGE",
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

export interface IEmail {
  email?: string;
}

export interface IResetPassword {
  password: string;
  confirmPassword: string;
  token: string;
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
export interface ISendResetLetterAction {
  type: AuthActionTypes.SEND_RESET_LETTER;
  payload: IEmail;
}

export interface ILoginUserAction {
  type: AuthActionTypes.LOGIN_USER;
  payload: IUserLogin;
}
export interface IResetPasswordAction {
  type: AuthActionTypes.RESET_PASSWORD;
  payload: IResetPassword;
}
export interface IClearMessageAction {
  type: AuthActionTypes.CLEAR_MESSAGE;
}

export type AuthAction =
  | IRegisterAction
  | IConfirmUserAction
  | ISetMessageAction
  | ILoginUserAction
  | ISendResetLetterAction
  | IResetPasswordAction
  | IClearMessageAction;
