export const url = 'https://domain.us:5005/api';

export const setHeaders = () => {
    const headers = {
        headers: {
            'x-auth-token': localStorage.getItem('token')
        }
    };

    return headers;
};
