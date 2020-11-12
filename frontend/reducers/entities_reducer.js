import { combineReducers } from "redux";
import physicianReducer from "./physicians_reducer";

const entitiesReducer = combineReducers({
  physicians: physicianReducer
});

export default entitiesReducer;
