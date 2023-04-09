import TextInput from "../../TextInput";
import Button from "../../Button";
import * as I from "./style";

const RepositoryInput = () => {
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
      </I.RepositoryBox>
    </>
  );
};

export default RepositoryInput;
