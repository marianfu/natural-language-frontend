import axios from 'axios';

export default class Request {

  constructor() {
    this.url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';
  }

  doGet(url, params) {
    return axios.get(this.url + url, {params});
  }

  doPost(url, data) {
    return axios.post(this.url + url, {data})
  }
}