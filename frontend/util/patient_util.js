// export const fetchPatients = (query) => {
//   if (!query){
//     return $.ajax({
//       url: `/api/patients`,
//     });
//   } else {
//     return $.ajax({
//       url: `/api/patients?title=${query}`,
//     });
//   }
// };
export const fetchPatients = () => {
    return $.ajax({
      url: `/api/patients`,
    });
};

export const fetchPatient = (patientId) => {
  return $.ajax({
    url: `/api/patients/${patientId}`,
  });
};

export const createPatient = (formData) =>
  $.ajax({
    method: "POST",
    url: "/api/patients",
    data: formData,
    contentType: false,
    processData: false,
    dataType: "json",
  });

export const updatePatient = (formData, patientId) => {
  // debugger
  return $.ajax({
    method: "PATCH",
    url: `/api/patients/${patientId}`,
    data: formData,
    contentType: false,
    processData: false,
    dataType: "json",
  });
};

export const deletePatient = (patientId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/patients/${patientId}`,
});
