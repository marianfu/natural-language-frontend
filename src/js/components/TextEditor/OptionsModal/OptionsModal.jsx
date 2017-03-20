import React from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';

export default class OptionsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: this.props.showModal };
  }

  close = () => {
    this.setState({ showModal: false });
    this.props.closeModal();
  }

  open = () => {
    this.setState({ showModal: true });
    this.props.openModal();
  }

  save = () => {
    this.props.changeTextEditorTheme()
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Tema de Color</h4>
            <DropdownButton title="Tema" id="bg-nested-dropdown">
              <MenuItem eventKey="monokai">Monokai</MenuItem>
              <MenuItem eventKey="xcode">xCode</MenuItem>
            </DropdownButton>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle='primary' onClick={this.save}>Guardar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}