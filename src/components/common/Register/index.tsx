import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../../store/common/common.store";
import Modal from "../Modal";
import * as M from "./style";
import UserForm from "./UserInputForm/index";
import { SwitchCase } from "@b1nd/b1nd-react-util";
import RepositoryForm from "./RepositoryForm/index";

const Register = () => {
  const [isOpen, setIsOpen] = useRecoilState<boolean>(RegisterModalOpenAtom);
  const [component, setComponent] = useState("userForm");

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <M.Content
        onClick={(e: ChangeEvent<any>) => {
          e.stopPropagation();
        }}
      >
        <M.ModalHeader>
          <M.ModalTextBox>
            <div className="ModalText">REGISTER</div>
          </M.ModalTextBox>
          <M.ModalButton>
            <button onClick={() => setComponent("userForm")} className="user">
              USER
            </button>
            <button
              onClick={() => setComponent("RepositoryForm")}
              className="repository"
            >
              REPOSITORY
            </button>
          </M.ModalButton>
        </M.ModalHeader>
        <div>
          <SwitchCase
            value={component}
            caseBy={{
              userForm: <UserForm />,
              RepositoryForm: <RepositoryForm />,
            }}
          />
        </div>
      </M.Content>
    </Modal>
  );
};

export default Register;
