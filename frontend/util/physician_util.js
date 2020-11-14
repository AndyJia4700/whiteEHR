export const fetchPhysicians = () => (
    $.ajax({
        url: 'api/physicians'
    })
);

export const fetchPhysician = (physicianId) => {
    // debugger;
    return $.ajax({
        url: `api/physicians/${physicianId}`
    })
};

export const updatePhysician = (formData, physicianId) => {
    // debugger;
    return $.ajax({
        method: 'PATCH',
        url: `/api/physicians/${physicianId}`,
        data: formData,
        contentType: false,
        processData: false,
        dataType: 'json',
    })
}