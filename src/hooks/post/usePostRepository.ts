import { B1ndToast } from "@b1nd/b1nd-toastify";
import { ChangeEvent, useState } from "react";
import { usePostRepositoryMutation } from "../../queries/github/github.query";

const usePostRepository = () => {
  const [postData, setPostData] = useState({
    githubId: "",
    repositoryName: "",
  });
  const postGithubUserMutation = usePostRepositoryMutation();

  const onChangePostData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitRepository = () => {
    postGithubUserMutation.mutate(postData, {
      onSuccess: () => {
        B1ndToast.showSuccess("레포지토리 등록 성공");
      },
      onError: () => {
        B1ndToast.showError("레포지토리 등록 실패");
      },
    });
  };
  return { postData, onSubmitRepository, onChangePostData };
};

export default usePostRepository;
