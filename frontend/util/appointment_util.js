export const fetchAppointments = () =>
  $.ajax({
    url: "api/appointments",
});

export const fetchAppointment = (appointmentId) => {
  return $.ajax({
    url: `api/appointments/${appointmentId}`,
  });
};

export const createAppointment = (appointment) => {
  return $.ajax({
    method: "POST",
    url: "/api/appointments",
    data: appointment
  })
};

export const deleteAppointment = (appointmentId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/appointments/${appointmentId}`,
  });
}
