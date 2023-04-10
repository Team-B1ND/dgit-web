import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../../../store/common/common.store";

const UserForm = () => {
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalOpenAtom);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <I.UserBox>
        <I.UserId>GitHub User ID</I.UserId>
        <I.UserInput>
          <TextInput />
          <Button buttonType="submit" className="UserButton">
            확인
          </Button>
        </I.UserInput>
        <I.UserButton>
          <Button
            buttonType="cancel"
            onClick={onClose}
            className="cancelButton"
          >
            취소
          </Button>
          <Button buttonType="submit">확인</Button>
        </I.UserButton>
      </I.UserBox>
    </>
  );
};

export default UserForm;
