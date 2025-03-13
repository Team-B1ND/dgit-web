import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostGithubUserMutation } from "../../queries/github/github.query";
import useApiError from "../../utils/errorHandler";
import useModal from "../util/useModal";

const usePostMember = () => {
  const [githubId, setGithubId] = useState("");
  const postGithubUserMutation = usePostGithubUserMutation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { close } = useModal();
  const onChangeGithubId = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGithubId(value);
  };
  const clearLoginField = () => {
    setGithubId("");
  };

  const onSubmitMember = () => {
    postGithubUserMutation.mutate(
      { githubId },
      {
        onSuccess: () => {
          B1ndToast.showSuccess("유저 등록 성공 관리자의 승인을 기다려주세요");
          setGithubId("");
          close();
          navigate("/");
        },
        onError: (error: any) => {
          useApiError(error.response.data.status);
        },
      }
    );
  };

  return { onSubmitMember, githubId, setGithubId, onChangeGithubId , clearLoginField};
};

export default usePostMember;
