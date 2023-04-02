import React, { useState } from "react";
import * as M from "../style";
import UserInputPage from "../../TextInput/UserInputPage";
import RepositoryInput from "../../TextInput/RepositoryInput";

const ModalContainer = ({ onClose }: any) => {
  const [component, setComponent] = useState(true);

  return (
    <M.ModalContainer>
      <M.Content>
        <M.ModalHeader>
          <M.ModalTextBox>
            <div className="ModalText">REGISTER</div>
          </M.ModalTextBox>
          <M.ModalButton>
            <button onClick={() => setComponent(true)} className="user">
              USER
            </button>
            <button onClick={() => setComponent(false)} className="repository">
              REPOSITORY
            </button>
          </M.ModalButton>
        </M.ModalHeader>
        <div>
          <div>{component ? <UserInputPage /> : <RepositoryInput />}</div>
        </div>
      </M.Content>
    </M.ModalContainer>
  );
};

export default ModalContainer;
