import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { usePostGithubUserMutation } from "../../queries/github/github.query";

const usePostMember = () => {
  const [githubId, setGithubId] = useState("");
  const postGithubUserMutation = usePostGithubUserMutation();

  const onChangeGithubId = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGithubId(value);
  };

  const onSubmitMember = () => {
    postGithubUserMutation.mutate(
      { githubId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("유저 등록 성공");
        },
        onError: () => {
          B1ndToast.showError("유저 등록 실패");
        },
      }
    );
  };
  return { onSubmitMember, githubId, setGithubId, onChangeGithubId };
};

export default usePostMember;
