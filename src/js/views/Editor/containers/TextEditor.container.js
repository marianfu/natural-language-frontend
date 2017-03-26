import TextEditor from 'js/components/TextEditor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTextEditorValue } from 'js/components/TextEditor/actions';

const mapStateToProps = state => {
  return {
    theme: state.textEditor.theme,
    value: state.textEditor.value,
    fontSize: state.textEditor.fontSize,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    changeTextEditorValue,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);