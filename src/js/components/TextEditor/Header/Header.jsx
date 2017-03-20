import React from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import OptionsModal from '../OptionsModal';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal = () => {
    const showModal = true;
    this.setState({
      showModal
    });
  }

  handleCloseModal = () => {
    const showModal = false;
    this.setState({
      showModal
    });
  }

  render() {
    return (
      <div className="text-editor-footer">
        <Button
          className='icon-button'
          bsSize='xsmall'
          onClick={this.handleOpenModal}
        >
          <span className='glyphicon glyphicon-cog' aria-hidden="true"></span>
        </Button>
        {this.state.showModal &&
          <OptionsModal
            showModal={this.state.showModal}
            openModal={this.handleOpenModal}
            closeModal={this.handleCloseModal}
          />}
      </div>
    );
  }
}