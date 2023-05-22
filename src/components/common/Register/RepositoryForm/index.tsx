import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import usePostRepository from "../../../../hooks/post/usePostRepository";
import useModal from "../../../../hooks/util/useModal";

const RepositoryForm = () => {
  const { close } = useModal();
  const { onChangePostData, onSubmitRepository, repositoryData } =
    usePostRepository();
  return (
    <>
      <I.RepositoryBox>
        <I.RepositoryUserId>GitHub User ID</I.RepositoryUserId>
        <I.UserInput>
          <TextInput
            name="githubId"
            placeholder="Github 아이디 (example-user)"
            onChange={onChangePostData}
            value={repositoryData.githubId}
          />
          <Button buttonType="submit" className="UserButton">
            확인
          </Button>
        </I.UserInput>

        <I.RepositoryID>GitHub Repository Name</I.RepositoryID>
        <I.RepositoryInput>
          <TextInput
            name="repositoryName"
            placeholder="Repository 이름"
            onChange={onChangePostData}
            value={repositoryData.repositoryName}
          />
        </I.RepositoryInput>
        <I.RepositoryButton>
          <Button buttonType="cancel" onClick={close} className="cancelButton">
            취소
          </Button>
          <Button buttonType="submit" onClick={onSubmitRepository}>
            확인
          </Button>
        </I.RepositoryButton>
      </I.RepositoryBox>
    </>
  );
};

export default RepositoryForm;
