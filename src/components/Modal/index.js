// @packages
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

// @own
import './styles.scss';

const modalRoot = document.getElementById('modal-root');

function Modal({ children }) {
  const element = document.createElement('div');

  useEffect(
    () => {
      modalRoot.appendChild(element);
      return () => {
        modalRoot.removeChild(element);
      };
    },
    [element],
  );

  return ReactDOM.createPortal(children, element);
}

export default Modal;
