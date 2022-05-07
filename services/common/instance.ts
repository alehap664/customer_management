import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  ($config: AxiosRequestConfig): AxiosRequestConfig => {
    if ($config.method === 'get') {
      $config.params = { ...$config.params };
    }
    $config.headers['Content-Type'] = 'application/json';
    $config.headers.Accept = 'application/json';
    return $config;
  },
  async (error: AxiosError): Promise<AxiosError> => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error.response ? error.response.data.errors : error),
);
export default axiosInstance;
