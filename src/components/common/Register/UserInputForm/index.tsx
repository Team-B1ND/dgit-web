import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import usePostMember from "../../../../hooks/post/usePostMember";
import useModal from "../../../../hooks/util/useModal";

const UserForm = () => {
  const { close } = useModal();

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
        </I.UserInput>
        <I.UserButton>
          <Button buttonType="cancel" onClick={close} className="cancelButton">
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
