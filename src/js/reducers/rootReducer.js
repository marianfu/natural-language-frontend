import { combineReducers } from 'redux';
import textEditor from 'js/components/TextEditor/reducer';

const rootReducer = combineReducers({
  textEditor
});

export default rootReducer;