import axios from "axios";

export const API_ROOT = "http://bounceserviceapi-001-site1.atempurl.com/api/"

const responseBody = res => res.data;
const requests = {
    del: url =>
        axios.del(`${API_ROOT}${url}`).then(responseBody),
    get: url =>
        axios.get(`${API_ROOT}${url}`).then(responseBody),
    put: (url, body) =>
        axios.put(`${API_ROOT}${url}`, body).then(responseBody),
    post: (url, body) =>
        axios.post(`${API_ROOT}${url}`, body).then(responseBody),
    patch: (url, body) =>
        axios.patch(`${API_ROOT}${url}`, body).then(responseBody)
};

const Auth = {
    login: (username, password) =>
        requests.post('Authentication/login', { username, password }),
    register: (data) =>
        requests.post('Authentication/register/therapist', data),
    validate: (token) =>
        requests.post(`Authentication/ValidateToken?${token}`),
    saveAuthData: (_user) => {
        window.localStorage.setItem('auth', JSON.stringify(_user));
    },

}

const api = {
    Auth,
}

export default api;
