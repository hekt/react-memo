import React, {Component} from 'react';
import Modal from 'react-modal';

import { RegisterForm, RegisterFormProps } from 'components/RegisterForm';

export class RegisterFormModal extends Component<RegisterFormProps, {
  modalIsOpen: boolean,
}> {
  constructor(props: RegisterFormProps) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <span className="open-register-form" onClick={this.openModal}>register</span>
        <Modal
          className="register-form-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <RegisterForm
            onSubmit={this.props.onSubmit}
          />
          <span className="close-register-form" onClick={this.closeModal}>close</span>
        </Modal>
      </div>
    );
  }
}
