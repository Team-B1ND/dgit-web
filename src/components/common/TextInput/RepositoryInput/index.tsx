import TextInput from "..";
import Button from "../../Button";
import * as I from "../style";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../../../store/modalAtom";

const RepositoryInput = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const modalCloes = () => {
    setModal(false);
  };

  return (
    <>
      <I.UserBox>
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
            onClick={modalCloes}
            className="cancelButton"
          >
            취소
          </Button>
          <Button buttonType="submit">확인</Button>
        </I.RepositoryButton>
      </I.UserBox>
    </>
  );
};

export default RepositoryInput;
