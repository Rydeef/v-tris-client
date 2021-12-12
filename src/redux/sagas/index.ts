import { all, fork } from "redux-saga/effects";
import auth from "./auth";
import columns from "./columns";
import user from "./user";

export const rootSaga = function* root() {
  yield all([fork(auth), fork(user), fork(columns)]);
};
