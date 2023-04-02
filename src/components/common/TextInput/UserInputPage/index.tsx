import TextInput from "..";
import Button from "../../Button";
import * as I from "../style";
import { useRecoilState } from "recoil";
import { modalAtom } from "../../../../store/modalAtom";

const UserInputPage = () => {
  const [modal, setModal] = useRecoilState(modalAtom);
  const modalCloes = () => {
    setModal(false);
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
            onClick={modalCloes}
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

export default UserInputPage;
