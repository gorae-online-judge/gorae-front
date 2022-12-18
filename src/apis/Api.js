import { configure } from "@testing-library/react";
import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8080/",
});

const MemberApi = axios.create({
    baseURL: "http://localhost:7070/",
});

Api.interceptors.request.use((config) => {
    const jwt = localStorage.getItem('jwt');
    config.headers['Authorization'] = jwt
        ? 'Bearer ' + jwt
        : '';
    return config;
});

export { 
    Api,
    MemberApi
};