import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://lushroot-us.backendless.app/api",
});