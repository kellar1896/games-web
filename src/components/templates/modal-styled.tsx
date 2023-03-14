import React, { memo } from "react";
import Modal from "react-modal";

type ModalStyledProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

const ModalStyled = ({ children, isOpen }: ModalStyledProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#AC9FBB",
      borderRadius: "5px",
      padding: "20px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      {children}
    </Modal>
  );
};

export default memo(ModalStyled);
