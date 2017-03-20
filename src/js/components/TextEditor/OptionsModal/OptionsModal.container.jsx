import OptionsModal from './OptionsModal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeTextEditorTheme } from '../actions';

const mapDispatchToPros = dispatch => {
  return bindActionCreators({
    changeTextEditorTheme
  }, dispatch);
}

export default connect(null, mapDispatchToPros)(OptionsModal);