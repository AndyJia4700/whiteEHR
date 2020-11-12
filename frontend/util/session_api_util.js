export const postSession = physician => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {
            physician
        }
    })
);

export const deleteSession = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const postPhysician = physician => (
    $.ajax({
        method: 'POST',
        url: 'api/physicians',
        data: {
            physician
        }
    })
);