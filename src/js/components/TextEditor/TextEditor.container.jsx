import TextEditor from './TextEditor';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDefaultOptions } from './actions';

const mapStateToProps = (state) => {
  return { options: state.textEditor }
};

export default connect(mapStateToProps)(TextEditor);