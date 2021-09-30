export enum UserActionTypes {
  GET_USER_INFO = "GET_USER_INFO",
  SET_USER_INFO = "SET_USER_INFO",
}

export interface IUser {
  userInfo?: Object;
}

export interface IGetUserInfoAction {
  type: UserActionTypes.GET_USER_INFO;
}
export interface ISetUserInfoAction {
  type: UserActionTypes.SET_USER_INFO;
  payload: Object;
}

export type UserAction = IGetUserInfoAction | ISetUserInfoAction;
