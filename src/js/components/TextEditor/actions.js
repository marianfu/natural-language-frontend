import {
  SET_TEXT_EDITOR_THEME, SET_TEXT_EDITOR_VALUE, SET_FONT_SIZE
} from './constants';

export function changeTextEditorTheme(theme) {
  return ({type: SET_TEXT_EDITOR_THEME, payload: theme});
  }

export function changeTextEditorValue(value) {
  return ({type: SET_TEXT_EDITOR_VALUE, payload: value});
}

export function changeFontSize(fontSize) {
  return ({type: SET_FONT_SIZE, payload: fontSize});
}
