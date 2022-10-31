import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
const StyleModal = styled.div`
  position: fixed;
  top: 6vh;
  left: 165vh;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 30;
  width: 250px;
  height: 300px;
  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }
`;
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0);
`;
const Backdrop = () => {
  return <StyledBackdrop></StyledBackdrop>;
};
const ModalOverlay = (props) => {
  return (
    <StyleModal>
      <div>{props.children}</div>
    </StyleModal>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const dispatch = useDispatch();

  const toggle = useSelector((state) => state.ui.profilePopup);

  const onClickHandler = () => {
    {
      console.log(`setMouseHover is called`);
    }
    dispatch(uiActions.toggle());
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        toggle ? <Backdrop onClick={onClickHandler} /> : <></>,
        portalElement
      )}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </React.Fragment>
  );
};

export default Modal;
