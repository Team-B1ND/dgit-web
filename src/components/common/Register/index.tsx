import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../../store/modalAtom";
import ModalBox from "../Modal";
import * as M from "./style";
import UserInputPage from "./UserInputPage";
import RepositoryInput from "./RepositoryInput";
import Button from "../Button";

const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalAtom);
  const [component, setComponent] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <ModalBox isOpen={isOpen} onClose={onClose}>
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
                <button
                  onClick={() => setComponent(false)}
                  className="repository"
                >
                  REPOSITORY
                </button>
              </M.ModalButton>
            </M.ModalHeader>
            <div>
              <div>{component ? <UserInputPage /> : <RepositoryInput />}</div>
            </div>
            <M.UserButton>
              <Button
                buttonType="cancel"
                onClick={onClose}
                className="cancelButton"
              >
                취소
              </Button>
              <Button buttonType="submit">확인</Button>
            </M.UserButton>
          </M.Content>
        </M.ModalContainer>
      </ModalBox>
    </div>
  );
};

export default Modal;
