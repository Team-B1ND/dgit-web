import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../../../store/modalAtom";
import * as M from "../style";

const ModalContainer = ({ onClose }: any) => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const modalCloes = () => {
    setModal(false);
  };

  return (
    <M.Background>
      <M.Content>
        <div>
          <div>REGISTER</div>
          <button>user</button>
          <button>REPOSITORY</button>
        </div>
        <div></div>
        <button onClick={modalCloes}>에에에</button>
      </M.Content>
    </M.Background>
  );
};

export default ModalContainer;
