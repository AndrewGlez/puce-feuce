/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetcher = (url: string) =>
  axiosInstance.get(url).then((res) => res.data);

export const postFetcher = (url: string, data: any) =>
  axiosInstance.post(url, data).then((res) => res.data);
