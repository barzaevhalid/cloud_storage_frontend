import axios from "axios";

import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://localhost:8080/api";

axios.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const { _token } = parseCookies();

    if (_token && !config.url?.endsWith("/login")) {
      config.headers.Authorization = "Bearer " + _token;
    }
  }
  return config;
});

export default axios;
