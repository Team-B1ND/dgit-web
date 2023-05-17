import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";
import { useRecoilState } from "recoil";
import { RegisterModalOpenAtom } from "../../../../store/common/common.store";
import usePostRepository from "../../../../hooks/post/usePostRepository";

const RepositoryForm = () => {
  const [isOpen, setIsOpen] = useRecoilState(RegisterModalOpenAtom);
  const onClose = () => {
    setIsOpen(false);
  };

  const { onChangePostData, onSubmitRepository, postData } =
    usePostRepository();
  return (
    <>
      <I.RepositoryBox>
        <I.RepositoryUserId>GitHub User ID</I.RepositoryUserId>
        <I.UserInput>
          <TextInput
            name="githubId"
            onChange={onChangePostData}
            value={postData.githubId}
          />
          <Button buttonType="submit" className="UserButton">
            확인
          </Button>
        </I.UserInput>

        <I.RepositoryID>GitHub Repository Name</I.RepositoryID>
        <I.RepositoryInput>
          <TextInput
            name="repositoryName"
            onChange={onChangePostData}
            value={postData.repositoryName}
          />
        </I.RepositoryInput>
        <I.RepositoryButton>
          <Button
            buttonType="cancel"
            onClick={onClose}
            className="cancelButton"
          >
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
