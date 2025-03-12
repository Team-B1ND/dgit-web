import { ChangeEvent, useState } from "react";
import * as M from "./style";
import UserForm from "./UserInputForm/index";
import { SwitchCase } from "@b1nd/b1nd-react-util";
import RepositoryForm from "./RepositoryForm/index";
import useModal from "hooks/util/useModal";
import { DodamFilledButton, DodamModal } from "@b1nd/dds-web";

export type colorType = "userForm" | "repositoryForm";

interface ModalProps {
  isOpen: boolean;
  close:() => void;
}

const Register = ({isOpen,close}:ModalProps) => {
  const [component, setComponent] = useState<colorType>("userForm");

  return (
    <DodamModal isOpen={isOpen} close={close} >
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
            active={component === "userForm"}
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
    </DodamModal>
  );
};

export default Register;
