import {
  GET_LESSONS, GET_LESSONS_SUCCESS, GET_LESSONS_ERROR
} from './constants';

export default function lessons(state = [], action) {
  switch (action.type) {
    case GET_LESSONS:
      return state;
    case GET_LESSONS_SUCCESS:
      const { level } = action.payload;
      return [...action.payload];
    case GET_LESSONS_ERROR:
      return state;
    default:
      return state;
  }
}