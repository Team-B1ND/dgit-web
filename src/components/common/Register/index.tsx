import { ChangeEvent, useState } from "react";
import Modal from "../Modal";
import * as M from "./style";
import UserForm from "./UserInputForm/index";
import { SwitchCase } from "@b1nd/b1nd-react-util";
import RepositoryForm from "./RepositoryForm/index";
import useModal from "../../../hooks/util/useModal";

export type colorType = "userForm" | "repositoryForm";

const Register = () => {
  const [component, setComponent] = useState<colorType>("userForm");
  const { close, isOpen } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <M.Content
        onClick={(e: ChangeEvent<any>) => {
          e.stopPropagation();
        }}
      >
        <M.ModalHeader>
          <M.ModalTextBox>
            <div className="ModalText">REGISTER</div>
          </M.ModalTextBox>
          <M.ModalButton
            userBackground={
              component === "userForm" ? "rgb(58, 58, 58)" : "#2d2d2d"
            }
            repositoryBackground={
              component === "repositoryForm" ? "rgb(58, 58, 58)" : "#2d2d2d"
            }
          >
            <button onClick={() => setComponent("userForm")} className="user">
              USER
            </button>
            <button
              onClick={() => setComponent("repositoryForm")}
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
              repositoryForm: <RepositoryForm />,
            }}
          />
        </div>
      </M.Content>
    </Modal>
  );
};

export default Register;
