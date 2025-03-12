import Button from "../../Button";
import * as I from "./style";
import usePostMember from "hooks/post/usePostMember";
import useModal from "hooks/util/useModal";
import { DodamFilledButton, DodamFilledTextField } from "@b1nd/dds-web";

const UserForm = () => {
  const { close } = useModal();

  const { onChangeGithubId, onSubmitMember, githubId } = usePostMember();
  return (
    <>
      <I.UserBox>
        <I.UserId>GitHub User ID</I.UserId>
        <I.UserInput>
          <DodamFilledTextField
            onChange={onChangeGithubId}
            value={githubId} 
            type="text"
            label="" 
            placeholder={"Github 아이디 (example-user)"}          
            />
          {/* <TextInput
            onChange={onChangeGithubId}
            placeholder="Github 아이디 (example-user)"
          /> */}
        </I.UserInput>
        <I.UserButton>
           <DodamFilledButton
              width={100}
              size="Medium"
              backgroundColorType="Secondary"
              onClick={close}
              >
              취소
            </DodamFilledButton>
          
            <DodamFilledButton
              width={100}
              size="Medium"
              backgroundColorType="Primary"
              onClick={onSubmitMember}
              textTheme="staticWhite"
              >
              취소
            </DodamFilledButton>
        </I.UserButton>
      </I.UserBox>
    </>
  );
};

export default UserForm;
