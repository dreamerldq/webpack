import axios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios'

interface SuccessResponse<T = any> {
  data: T
}

interface ErrorInfo {
  domain: string
  message: string
  reason: string
}

interface FailureResponse {
  error: {
    code: number;
    message: string;
    errors?: ErrorInfo[];
  }
}

type HttpResponse = SuccessResponse | FailureResponse

const http: AxiosInstance = axios.create({
  baseURL: 'http://47.93.217.181:3000',
  timeout: 600 * 1000,
})

// http.interceptors.response.use((res: AxiosResponse<HttpResponse>) => {
//   const result = res.data;
//   if ('data' in result) {
//     return result.data;
//   } else {
//     const error = result.error;
//     if (error.errors) {
//       const errors = error.errors.map(item => item.reason);
//       return Promise.reject(errors);
//     } else {
//       return Promise.reject(error.message);
//     }
//   }
// }, (error) => {
//   return Promise.reject(error);
// });

export class HttpService {
  static get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return (http.get(url, config) as Promise<any>)
  }
  static post<T = any>(url: string, body?: AxiosRequestConfig): Promise<T> {
    return (http.post(url, body) as Promise<any>)
  }
}
