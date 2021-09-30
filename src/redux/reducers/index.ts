import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage: storage,
};


const rootReducer = persistReducer(
  rootPersistConfig,
  combineReducers({ auth, user })
);

export default rootReducer;
