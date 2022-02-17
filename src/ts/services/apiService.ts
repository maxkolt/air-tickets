import axios from 'axios';
import {MyConfig} from "../config/apiConfig";

export class Api {
  async countries() {
    try {
      const response = await axios.get(`${MyConfig.url}/countries`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${MyConfig.url}/cities`);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }

  // async prices(params) {}
}

const api = new Api()
console.log(api)