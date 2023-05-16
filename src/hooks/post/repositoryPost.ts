import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostGithubUserMutation } from "../../queries/github/github.query";

const memberPost = () => {
  const queryClient = useQueryClient();
  const [postData, setPostData] = useState({
    githubId: "",
    repositoryName: "",
  });
  const postGithubUserMutation = usePostGithubUserMutation();

  const onChangeGithubId = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitMember = () => {
    postGithubUserMutation.mutate(postData, {
      onSuccess: () => {
        B1ndToast.showSuccess("레포지토리 등록 성공");
      },
      onError: () => {
        B1ndToast.showError("레포지토리 등록 실패");
      },
    });
  };
  return { postData, onSubmitMember, onChangeGithubId };
};

export default memberPost;
