import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.mode === "development" ? "http://localhost:9999/api" : "/api",
  withCredentials: true, // for cookies
});

export default axiosInstance;
