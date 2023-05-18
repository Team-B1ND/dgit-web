import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import { usePostRepositoryMutation } from "../../queries/github/github.query";
import { RegisterModalOpenAtom } from "../../store/common/common.store";

const usePostRepository = () => {
  const queryClient = useQueryClient();
  const [postData, setPostData] = useState({
    githubId: "",
    repositoryName: "",
  });
  const postGithubUserMutation = usePostRepositoryMutation();
  const setClose = useSetRecoilState(RegisterModalOpenAtom);
  const onChangePostData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitRepository = () => {
    postGithubUserMutation.mutate(postData, {
      onSuccess: () => {
        B1ndToast.showSuccess("레포지토리 등록 성공");
        queryClient.invalidateQueries(["repository/getRepository"]);
        setPostData({ githubId: "", repositoryName: "" });
        setClose(false);
      },
      onError: () => {
        B1ndToast.showError("레포지토리 등록 실패");
      },
    });
  };
  return { postData, onSubmitRepository, onChangePostData };
};

export default usePostRepository;
