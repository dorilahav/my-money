import axios from 'axios';

const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const replaceDates = (_key: string, value: any) => {
  if (typeof value === 'string' && value.match(dateRegex)) return new Date(value);

  return value;
};

const axiosInstance = axios.create({
  baseURL: '/api',
  transformResponse: data => JSON.parse(data, replaceDates)
});

export default {
  get: <T>(url: string) => axiosInstance.get<T>(url).then(x => x.data),
  post: <T, TBody = any>(url: string, data: TBody) => axiosInstance.post<T>(url, data).then(x => x.data),
  put: <T, TBody = any>(url: string, data: TBody) => axiosInstance.put<T>(url, data).then(x => x.data),
  delete: <T = void>(url: string) => axiosInstance.delete<T>(url).then(x => x.data)
};
