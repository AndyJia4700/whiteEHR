import {merge} from 'lodash';
import { LOGOUT_CURRENT_PHYSICIAN, RECEIVE_CURRENT_PHYSICIAN } from '../actions/session_actions';

const _nullSession = {
    currentPhysician: null
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    
    switch (action.type){
        case RECEIVE_CURRENT_PHYSICIAN:
            const currentPhysician = action.physician
            return Object.assign({}, {currentPhysician});
        case LOGOUT_CURRENT_PHYSICIAN:
            return _nullSession
        default:
            return state;
    }
};

export default sessionReducer;