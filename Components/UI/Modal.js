import classes from "./modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClickOverlay}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClickOverlay={props.onClickOverlay} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;