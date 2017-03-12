import {
  SET_TEXT_EDITOR_THEME, SET_TEXT_EDITOR_VALUE
} from './constants';

export function changeTextEditorTheme(theme) {
  return dispatch => {
    dispatch({type: SET_TEXT_EDITOR_THEME, payload: theme});
  }
}

export function changeTextEditorValue(value) {
  return dispatch => {
    dispatch({type: SET_TEXT_EDITOR_VALUE, payload: value});
  }
}
