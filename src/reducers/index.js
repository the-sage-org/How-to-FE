import { combineReducers } from "redux";
import userReducer from "./userReducer";
import guideReducer from "./guideReducer";

export default combineReducers({
  user: userReducer,
  guides: guideReducer
});
