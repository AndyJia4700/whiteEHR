import * as InsuranceUtil from "../util/insurance_util";

export const RECEIVE_ALL_INSURANCES = "RECEIVE_ALL_INSURANCES";
export const RECEIVE_INSURANCE = "RECEIVE_INSURANCE";
export const REMOVE_INSURANCE = "REMOVE_INSURANCE";

const receiveAllInsurances = (insurances) => ({
  type: RECEIVE_ALL_INSURANCES,
  insurances,
});

const receiveInsurance = (insurance) => ({
  type: RECEIVE_INSURANCE,
  insurance,
});

const removeInsurance = (insuranceId) => ({
  type: REMOVE_INSURANCE,
  insuranceId,
});

export const fetchInsurances = () => (dispatch) =>
  InsuranceUtil.fetchInsurances().then((insurances) =>
    dispatch(receiveAllInsurances(insurances))
  );

export const fetchInsurance = (insuranceId) => (dispatch) =>
  InsuranceUtil.fetchInsurance(insuranceId).then((insurance) =>
    dispatch(receiveInsurance(insurance))
  );

export const createInsurance = (insurance) => (dispatch) =>
  InsuranceUtil.createInsurance(insurance).then((insurance) =>
    dispatch(receiveInsurance(insurance))
  );

export const deleteInsurance = (insuranceId) => (dispatch) =>
  InsuranceUtil.deleteInsurance(insuranceId).then(() =>
    dispatch(removeInsurance(insuranceId))
  );