import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/ModalPortal.module.css";

const ModalPortal = ({ children, open }) => {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);

  return ReactDOM.createPortal(
    <dialog ref={dialog} className={styles.modal_window}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
