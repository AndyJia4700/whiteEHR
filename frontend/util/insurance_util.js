export const fetchInsurances = () =>
  $.ajax({
    url: "api/insurances",
});

export const fetchInsurance = (insuranceId) => {
  return $.ajax({
    url: `api/insurances/${insuranceId}`,
  });
};

export const createInsurance = (insurance) => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/insurances",
    data: insurance
  })
};

export const deleteInsurance = (insuranceId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/insurances/${insuranceId}`,
  });
}
