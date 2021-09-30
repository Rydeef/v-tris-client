import { call, takeLatest, put } from "redux-saga/effects";
import {
  IRegisterAction,
  IConfirmUserAction,
  ILoginUserAction,
  ISendResetLetterAction,
  AuthActionTypes,
  IResetPasswordAction
} from "../types/auth";
import { api } from "../../services/api";
import { setMessage, setAccessToken } from "../actions/auth";

function* registerUser(data: IRegisterAction): Generator {
  try {
    const response: any = yield call(api.post, "/auth/register", data.payload);
    yield put(setMessage(response.data.message));
  } catch (err: any) {
    if (err.response.status === 409) {
      yield put(setMessage(err.response.data.message));
    }
    if (err.response.status === 400) {
      yield put(setMessage(err.response.data.message));
    }
    return err;
  }
}
function* confirmUser(data: IConfirmUserAction): Generator {
  try {
    const response: any = yield call(
      api.post,
      `/auth/register/confirm/${data.payload}`,
      data.payload
    );
    yield put(setMessage(response.data.message));
  } catch (err: any) {
    // if(err.data)
    if (err.response.status === 409) {
      yield put(setMessage(err.response.data.message));
    }
    if (err.response.status === 400) {
      yield put(setMessage(err.response.data.message));
    }

    return err;
  }
}
function* loginUser(data: ILoginUserAction): Generator {
  try {
    console.log(123);
    
    const response: any = yield call(api.post, "/auth/login", data.payload);
    
    if (response.status === 200) {
      yield put(setAccessToken(response.data.token));
      window.localStorage.setItem("vTrisAccessToken", response.data.token);
      window.location.assign("/");
    } else yield put(setMessage(response.data.message));
  } catch (err: any) {
    if (err.response.status === 409) {
      yield put(setMessage(err.response.data.message));
    }
    if (err.response.status === 400) {
      yield put(setMessage(err.response.data.message));
    }
    return err;
  }
}

function* sendResetLtter(data: ISendResetLetterAction): Generator {
  try {
    const response: any = yield call(api.post, "/auth/reset", data.payload);

    yield put(setMessage(response.data.message));
  } catch (err: any) {
    if (err.response.status === 409) {
      yield put(setMessage(err.response.data.message));
    }
    if (err.response.status === 400) {
      yield put(setMessage(err.response.data.message));
    }
    return err;
  }
}

function* resetPassword(data: IResetPasswordAction): Generator {
  try {
    const response: any = yield call(
      api.post,
      "/auth/reset/password",
      data.payload
    );

    yield put(setMessage(response.data.message));
  } catch (err: any) {
    if (err.response.status === 409) {
      yield put(setMessage(err.response.data.message));
    }
    if (err.response.status === 400) {
      yield put(setMessage(err.response.data.message));
    }
    return err;
  }
}

function* auth(): Generator {
  yield takeLatest(AuthActionTypes.REGISTER_USER, registerUser);
  yield takeLatest(AuthActionTypes.CONFIRM_USER, confirmUser);
  yield takeLatest(AuthActionTypes.LOGIN_USER, loginUser);
  yield takeLatest(AuthActionTypes.SEND_RESET_LETTER, sendResetLtter);
  yield takeLatest(AuthActionTypes.RESET_PASSWORD, resetPassword);
}

export default auth;
