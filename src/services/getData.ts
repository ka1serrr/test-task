import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Method, Params } from '../common.types.ts/types';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

class GetData {
  async request(url: string, method: Method = 'GET', data = null, params?: AxiosRequestConfig<Params>) {
    try {
      if (method == 'GET') {
        const response = await axios.get(url, params);
        return response;
      }
      if (method == 'POST') {
        const response = await axios.post(url, data, params);
        return response;
      }
    } catch (e: unknown) {
      if (e instanceof Error || e instanceof AxiosError) {
        console.log(e.message);
        throw new Error(e.message);
      }
    }
  }
}

export const getData = new GetData();
