import {
  GET_LESSONS, GET_LESSONS_SUCCESS, GET_LESSONS_ERROR
} from './constants';
import Lessons from 'js/services/lessons';

function getLessons() {
  return {
    type: GET_LESSONS,
  }
}

function getLessonsSuccess(data) {
  return {
    type: GET_LESSONS_SUCCESS,
    payload: data,
  }
}

function getLessonsError(error) {
  return {
    type: GET_LESSONS_ERROR,
    payload: error,
  }
}

export default {
  fetchLessons: (level) => {
    return dispatch => {
      dispatch(getLessons());
      Lessons.getLessons(level || 1)
        .then(function({data}) {
          dispatch(getLessonsSuccess(data));
        })
        .catch(function({error}) {
          dispatch(getLessonsError(error));
        });
    }
  },
}
