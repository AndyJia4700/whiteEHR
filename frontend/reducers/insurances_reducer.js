import {
  RECEIVE_ALL_INSURANCES,
  RECEIVE_INSURANCE,
  REMOVE_INSURANCE,
} from "../actions/insurance_actions";
import { merge } from "lodash";

const insuranceReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_INSURANCES:
      return merge({}, oldState, action.insurances);
    case RECEIVE_INSURANCE:
      return merge({}, oldState, {
        [action.insurance.id]: action.insurance,
      });
    case REMOVE_INSURANCE:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.insuranceId];
      return nextState;
    default:
      return oldState;
  }
};

export default insuranceReducer;
