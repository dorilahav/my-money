import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

export default {
  get: <T>(url: string) => axiosInstance.get<T>(url).then(x => x.data),
  post: <T, TBody = any>(url: string, data: TBody) => axiosInstance.post<T>(url, data).then(x => x.data),
  put: <T, TBody = any>(url: string, data: TBody) => axiosInstance.put<T>(url, data).then(x => x.data),
  delete: <T = void>(url: string) => axiosInstance.delete<T>(url).then(x => x.data)
};
