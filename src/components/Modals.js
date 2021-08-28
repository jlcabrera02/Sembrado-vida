import React from "react";

export function Modal({ idSelect, children, centered, isStatic }) {
  return (
    <>
      <div
        className="modal fade"
        id={idSelect}
        tabIndex="-1"
        aria-hidden="true"
        data-bs-backdrop={isStatic ? "static" : null}
        data-bs-keyboard={isStatic ? "false" : null}
      >
        <div
          className={`modal-dialog ${centered ? "modal-dialog-centered" : ""}`}
        >
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
}

export function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

export function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

export function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}
