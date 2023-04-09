import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";

const UserInputPage = () => {
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
      </I.UserBox>
    </>
  );
};

export default UserInputPage;
