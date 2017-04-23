import axios from 'axios';

export default class Request {

  constructor() {
    this.url = 'http://localhost:8080';
  }

  doGet(url, params) {
    return axios.get(this.url + url, {params});
  }

  doPost(url, data) {
    return axios.post(this.url + url, {data})
  }
}