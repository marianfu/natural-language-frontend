import Editor from '../Editor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTextEditorTheme, changeFontSize } from 'js/components/TextEditor/actions';
import LessonsActions  from '../actions';

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
  };
};

const mapDispatchToProps = dispatch => {
  console.log(LessonsActions);
  return bindActionCreators({
    changeTextEditorTheme, changeFontSize, ...LessonsActions,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
