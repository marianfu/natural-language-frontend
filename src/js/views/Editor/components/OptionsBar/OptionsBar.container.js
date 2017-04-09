import { connect } from 'react-redux';
import actions from 'js/components/TextEditor/actions';
import OptionsBar from './OptionsBar';

const { changeTextEditorTheme, changeFontSize } = actions;
const OptionsBarActions = { changeTextEditorTheme, changeFontSize };

export default connect(null, OptionsBarActions)(OptionsBar);