import { combineReducers } from "redux";
import appointmentReducer from "./appointments_reducer";
import insuranceReducer from "./insurances_reducer";
import PatientReducer from "./patients_reducer";
import physicianReducer from "./physicians_reducer";

const entitiesReducer = combineReducers({
  physicians: physicianReducer,
  patients: PatientReducer,
  insurances: insuranceReducer,
  appointments: appointmentReducer
});

export default entitiesReducer;
