import { RECEIVE_CURRENT_PHYSICIAN, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

export const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;    
        case RECEIVE_CURRENT_PHYSICIAN:
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;