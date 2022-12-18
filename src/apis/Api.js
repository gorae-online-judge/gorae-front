import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8080/",
});

const MemberApi = axios.create({
    baseURL: "http://172.17.0.1:7070/",
});

const jwt = localStorage.getItem('jwt');
Api.defaults.headers.common['Authorization'] = jwt
    ? 'Bearer ' + jwt
    : '';

export { 
    Api,
    MemberApi
};