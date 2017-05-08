import Request from './request';

export default {
  translate(text) {
    const req = new Request();
    return req.doPost('/pseudocode', {text});
  },
};