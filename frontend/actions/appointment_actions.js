import * as AppointmentUtil from "../util/appointment_util";

export const RECEIVE_ALL_APPOINTMENTS = "RECEIVE_ALL_APPOINTMENTS";
export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";

const receiveAllAppointments = (appointments) => ({
  type: RECEIVE_ALL_APPOINTMENTS,
  appointments,
});

const receiveAppointment = (appointment) => ({
  type: RECEIVE_APPOINTMENT,
  appointment,
});

const removeAppointment = (appointmentId) => ({
  type: REMOVE_APPOINTMENT,
  appointmentId,
});

export const fetchAppointments = () => (dispatch) =>
  AppointmentUtil.fetchAppointments().then((appointments) =>
    dispatch(receiveAllAppointments(appointments))
  );

export const fetchAppointment = (appointmentId) => (dispatch) =>
  AppointmentUtil.fetchAppointment(appointmentId).then((appointment) =>
    dispatch(receiveAppointment(appointment))
  );

export const createAppointment = (appointment) => (dispatch) =>
  AppointmentUtil.createAppointment(appointment).then((appointment) =>
    dispatch(receiveAppointment(appointment))
  );

export const deleteAppointment = (appointmentId) => (dispatch) =>
  AppointmentUtil.deleteAppointment(appointmentId).then(() =>
    dispatch(removeAppointment(appointmentId))
  );