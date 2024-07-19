import SpinnerProvider from "@/components/Spinner/context";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
});

// Request Interceptor
AxiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig | any) => {
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response Interceptor
AxiosInstance.interceptors.response.use(
    (response: AxiosResponse | any) => {
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);

export default AxiosInstance;
