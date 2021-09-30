import axios, { AxiosInstance } from "axios";


export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("vTrisAccessToken") || null;
    
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("vTrisAccessToken");
      if (!window.location.href.includes("login")) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    } else {
      return error.response;
    }
  }
);
