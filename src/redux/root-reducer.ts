import Cookies from "cookies-js";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import CookieStorage from "./cookieStore";
import GlobalReducer from "./global/global.reducer";

const authPersistConfig = {
  key: "storeReduxOnCookie",
  storage: new CookieStorage(Cookies, {}),
};

const rootReducer = combineReducers({
  globalState: persistReducer(authPersistConfig ,GlobalReducer),
});

export default rootReducer;
