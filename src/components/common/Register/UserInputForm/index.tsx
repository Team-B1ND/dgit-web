import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../../../store/common/common.store";
import usePostMember from "../../../../hooks/post/usePostMember";

const UserForm = () => {
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalOpenAtom);

  const onClose = () => {
    setIsOpen(false);
  };

  const { onChangeGithubId, onSubmitMember } = usePostMember();
  return (
    <>
      <I.UserBox>
        <I.UserId>GitHub User ID</I.UserId>
        <I.UserInput>
          <TextInput
            onChange={onChangeGithubId}
            placeholder="Github 아이디 (example-user)"
          />
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
          <Button buttonType="submit" onClick={onSubmitMember}>
            확인
          </Button>
        </I.UserButton>
      </I.UserBox>
    </>
  );
};

export default UserForm;
