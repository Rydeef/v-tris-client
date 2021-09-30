import { UserActionTypes, UserAction, IUser } from "../types/user";

type stateTasks = IUser;

const initialState: stateTasks = {};

const user = (state = initialState, action: UserAction): stateTasks => {
  switch (action.type) {
    case UserActionTypes.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export default user;
