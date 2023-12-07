import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscape);
  }
  closeEscape = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal();
    }
  };
  closeBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { currentImage } = this.props;
    const { image, text } = currentImage;
    return createPortal(
      <div className="overlay" onClick={this.closeBackdrop}>
        <div className="modal">
          <button
            type="button"
            className="modal-close-btn"
            onClick={this.props.toggleModal}
          >
            X
          </button>
          <img src={image} alt={text} className="modal-img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
