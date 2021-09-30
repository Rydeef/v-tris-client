import { UserActionTypes } from "../types/user";

export const getUserInfo = () => ({
  type: UserActionTypes.GET_USER_INFO,
});

export const setUserInfo = (payload: Object) => ({
  type: UserActionTypes.SET_USER_INFO,
  payload,
});
