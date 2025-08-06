import React from "react";
import MuiModal from "@mui/material/Modal";

const Modal = (props) => {
  const { open, children, handleClose } = props;
  return (
    <MuiModal
      disableAutoFocus
      disableEnforceFocus
      disableRestoreFocus
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      {children}
    </MuiModal>
  );
};

export default Modal;
