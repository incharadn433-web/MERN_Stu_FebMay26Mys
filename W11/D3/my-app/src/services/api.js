import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Request interceptor
api.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer sample_Token";
    return config;
});

// Response interceptors (FIXED: Added 'n' to response and fixed 'err' variable)
api.interceptors.response.use(
    response => response,
    error => {
        console.log("Global error");
        return Promise.reject(error); // FIXED: Changed 'err' to 'error'
    }
);
