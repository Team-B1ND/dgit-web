import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostRepositoryMutation } from "../../queries/github/github.query";
import useModal from "../util/useModal";

const usePostRepository = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [repositoryData, setRepositoryData] = useState({
    githubId: "",
    repositoryName: "",
  });
  const postGithubUserMutation = usePostRepositoryMutation();
  const { close } = useModal();

  const onChangePostData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRepositoryData((prev) => ({ ...prev, [name]: value }));
  };

  const clearLoginField = (field: "githubId" | "repositoryName") => {
    setRepositoryData((prev) => ({ ...prev, [field]: "" }));
  };

  const onSubmitRepository = () => {
    postGithubUserMutation.mutate(repositoryData, {
      onSuccess: () => {
        B1ndToast.showSuccess("레포지토리 등록 성공");
        queryClient.invalidateQueries(["repository/getRepository"]);
        setRepositoryData({ githubId: "", repositoryName: "" });
        close();
        navigate("/repostars-ranking");
      },
      onError: () => {
        B1ndToast.showError("레포지토리 등록 실패");
      },
    });
  };
  return { repositoryData, onSubmitRepository, onChangePostData, clearLoginField };
};

export default usePostRepository;
