import {
  RECEIVE_ALL_APPOINTMENTS,
  RECEIVE_APPOINTMENT,
  REMOVE_APPOINTMENT,
} from "../actions/appointment_actions";
import { merge } from "lodash";

const appointmentReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_APPOINTMENTS:
      return merge({}, oldState, action.appointments);
    case RECEIVE_APPOINTMENT:
      return merge({}, oldState, {
        [action.appointment.id]: action.appointment,
      });
    case REMOVE_APPOINTMENT:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.appointmentId];
      return nextState;
    default:
      return oldState;
  }
};

export default appointmentReducer;
