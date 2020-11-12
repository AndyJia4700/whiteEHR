import * as PhysicianUtil from '../util/physician_util'

export const RECEIVE_ALL_PHYSICIANS = "RECEIVE_ALL_PHYSICIANS";
export const RECEIVE_PHYSICIAN = "RECEIVE_PHYSICIAN";

const receiveAllPhysicians = physicians => ({
    type: RECEIVE_ALL_PHYSICIANS,
    physicians
});

const receivePhysician = physician => ({
    type: RECEIVE_PHYSICIAN,
    physician
});


export const fetchPhysicians = () => dispatch => (
    PhysicianUtil.fetchPhysicians()
    .then(physicians => dispatch(receiveAllPhysicians(physicians)))
);

export const fetchPhysician = (physicianId) => (dispatch) =>
  PhysicianUtil.fetchPhysician(physicianId).then((physician) => dispatch(receivePhysician(physician))
);

export const updatePhysician = (formData, physicianId) => dispatch => {
    // debugger;
    return PhysicianUtil.updatePhysician(formData, physicianId)
    .then(physician => dispatch(receivePhysician(physician)))
}