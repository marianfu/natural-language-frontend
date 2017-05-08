import Request from './request';

export default {
  getLessons(id) {
    const req = new Request();
    return req.doGet('/lessons', {id});
  },
};