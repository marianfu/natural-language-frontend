import {
  SET_TEXT_EDITOR_THEME, SET_TEXT_EDITOR_VALUE, SET_TEXT_EDITOR_OPTIONS
} from './actions';
import { defaultOptions } from './TextEditor';

const initialState = {
  ...defaultOptions
};  

export default function textEditor(state = initialState, action) {
  switch (action.type) {
    case SET_TEXT_EDITOR_THEME: 
      return {...state, theme: action.payload};
    case SET_TEXT_EDITOR_VALUE: 
      return {...state, value: action.payload};
    default: 
      return state;
  }
}