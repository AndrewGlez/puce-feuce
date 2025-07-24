import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

const postFetcher = (url: string, data: any) =>
  axiosInstance.post(url, data).then((res) => res.data);

export { fetcher, postFetcher };
