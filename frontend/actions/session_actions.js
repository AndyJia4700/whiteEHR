import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_PHYSICIAN = 'RECEIVE_CURRENT_PHYSICIAN'
export const LOGOUT_CURRENT_PHYSICIAN = 'LOGOUT_CURRENT_PHYSICIAN'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentPhysician = (physician) => ({
  type: RECEIVE_CURRENT_PHYSICIAN,
  physician,
});

const logoutCurrentPhysician = () => ({
  type: LOGOUT_CURRENT_PHYSICIAN,
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const createNewPhysician = formPhysician => dispatch => (
    APIUtil.postPhysician(formPhysician)
        .then(
            physician => dispatch(receiveCurrentPhysician(physician)),
            error => dispatch(receiveSessionErrors(error.responseJSON))
        )
);


export const login = formPhysician => dispatch => (
    APIUtil.postSession(formPhysician)
    .then(
        physician => dispatch(receiveCurrentPhysician(physician)),
        error => dispatch(receiveSessionErrors(error.responseJSON))
    )
);

export const logout = () => dispatch => (
    APIUtil.deleteSession()
    .then(
        () => dispatch(logoutCurrentPhysician())
    )
);



