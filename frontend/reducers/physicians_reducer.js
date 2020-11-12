import {merge} from "lodash";
import { RECEIVE_CURRENT_PHYSICIAN } from "../actions/session_actions";
import { RECEIVE_ALL_PHYSICIANS, RECEIVE_PHYSICIAN } from "../actions/physician_actions";

const physicianReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_CURRENT_PHYSICIAN:
            return merge({}, state, { [action.physician.id]: action.physician });
        case RECEIVE_PHYSICIAN:
            return merge({}, state, { [action.physician.id]: action.physician });
        case RECEIVE_ALL_PHYSICIANS:
            return merge({}, state, action.physicians);
        default:
            return state
    }
}

export default physicianReducer;