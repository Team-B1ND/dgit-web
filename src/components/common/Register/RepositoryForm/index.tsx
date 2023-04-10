import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../../../store/common/common.store";

const RepositoryForm = () => {
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalOpenAtom);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <I.RepositoryBox>
        <I.RepositoryUserId>GitHub User ID</I.RepositoryUserId>
        <I.UserInput>
          <TextInput />
          <Button buttonType="submit" className="UserButton">
            확인
          </Button>
        </I.UserInput>

        <I.RepositoryID>GitHub Repository Name</I.RepositoryID>
        <I.RepositoryInput>
          <TextInput />
        </I.RepositoryInput>
        <I.RepositoryButton>
          <Button
            buttonType="cancel"
            onClick={onClose}
            className="cancelButton"
          >
            취소
          </Button>
          <Button buttonType="submit">확인</Button>
        </I.RepositoryButton>
      </I.RepositoryBox>
    </>
  );
};

export default RepositoryForm;
