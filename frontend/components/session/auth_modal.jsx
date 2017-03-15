import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const appElement = document.getElementById('auth-form');

  class AuthModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showModal: false};
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

// ReactDOM.render(<AuthModal {...props} />, document.getElementById('auth-form'))

export default AuthModal;
