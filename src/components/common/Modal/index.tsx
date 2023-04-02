import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalAtom } from "../../../store/modalAtom";
import ModalContainer from "./ModalContainer";
import ModalPortal from "./Portal";

const Modal = (props: any) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const modalOpen = () => {
    setModal(!modal);
    console.log("hi");
  };

  return (
    <div>
      <button onClick={modalOpen}>눌러보셈</button>
      <ModalPortal>
        {modal && <ModalContainer onClose={modalOpen} />}
      </ModalPortal>
    </div>
  );
};

export default Modal;
