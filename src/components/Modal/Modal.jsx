import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

function Modal(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      Modal
    </div>
  );
}

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      <div className="modal__content__close" onClick={closeModal}>
        <i class="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
