import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./Modal.style.js";

const Modal = ({ children, onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
