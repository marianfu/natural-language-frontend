import Editor from '../Editor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTextEditorTheme, changeFontSize } from 'js/components/TextEditor/actions';

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeTextEditorTheme, changeFontSize
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Editor);
