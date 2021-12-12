import { call, takeLatest, put } from "redux-saga/effects";

import { api } from "../../services/api";

import { UserActionTypes } from "../types/user";
import { setUserInfo } from "../actions/user";
import history from "../../utils/history";

function* getUserInfo(): Generator {
  try {
    const response: any = yield call(api.get, "/user");

    yield put(setUserInfo(response.data.data));
    if (response.status === 403) {
      history.push('/login')
    }
  } catch (err: any) {
    return err;
  }
}
function* user(): Generator {
  yield takeLatest(UserActionTypes.GET_USER_INFO, getUserInfo);
}

export default user;
