/** @format */
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// ToDo: google how to trap focus to this

const Modal = ({ children }) => {
  const elRef = useRef(null);

  // here to prevent memory leaks
  if (!elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);

    // the return in useEffect is the "clean up" function
    return () => modalRoot.removeChild(elRef.current);
  }, []); // , [] <- means will only run ONCE

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
