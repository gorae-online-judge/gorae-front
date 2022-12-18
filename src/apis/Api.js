import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:8080/",
});

const MemberApi = axios.create({
    baseURL: "http://localhost:7070/",
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
    },
});

// const jwt = localStorage.getItem('jwt');
// Api.defaults.headers.common['Authorization'] = jwt
//     ? 'Bearer ' + jwt
//     : '';

export { 
    Api,
    MemberApi
};