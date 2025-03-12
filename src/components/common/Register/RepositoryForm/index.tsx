import * as I from "./style";
import usePostRepository from "../../../../hooks/post/usePostRepository";
import useModal from "../../../../hooks/util/useModal";
import { DodamFilledButton, DodamFilledTextField } from "@b1nd/dds-web";

const RepositoryForm = () => {
  const { close } = useModal();
  const { onChangePostData, onSubmitRepository, repositoryData } =
    usePostRepository();
  return (
    <>
      <I.RepositoryBox>
        <I.RepositoryText>GitHub User ID</I.RepositoryText>
        <I.UserInput>
        <DodamFilledTextField
            onChange={onChangePostData}
            value={repositoryData.githubId}
            type="text"
            label="" 
            name="githubId"
            placeholder="Github 아이디"
            />
            
        </I.UserInput>

        <I.RepositoryText>GitHub Repository Name</I.RepositoryText>
        <I.RepositoryInput>
        <DodamFilledTextField
            onChange={onChangePostData}
            value={repositoryData.repositoryName}
            type="text"
            label="" 
            name="repositoryName"
            placeholder="Repository 이름"
            />
        </I.RepositoryInput>
        <I.RepositoryButton>
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
              onClick={onSubmitRepository}
              textTheme="staticWhite"
              >
              확인
            </DodamFilledButton>
        </I.RepositoryButton>
      </I.RepositoryBox>
    </>
  );
};

export default RepositoryForm;
