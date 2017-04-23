import { combineReducers } from 'redux';
import textEditor from 'js/components/TextEditor/reducer';
import lessons from 'js/views/Editor/reducer';

const rootReducer = combineReducers({
  textEditor,
  lessons,
});

export default rootReducer;