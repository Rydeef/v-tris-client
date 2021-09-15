import { all, fork } from "redux-saga/effects";
import auth from "./auth";

export const rootSaga = function* root() {
  yield all([fork(auth)]);
};
