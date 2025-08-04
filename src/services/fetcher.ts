/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_URL } from "../config/apiUrl";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
// Attach JWT token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Read token from cookies
    const token = (() => {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(/(^|; )token=([^;]+)/);
      return match ? match[2] : null;
    })();
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export const postFetcher = (url: string, data: any) =>
  axiosInstance.post(url, data).then((res) => res.data);
