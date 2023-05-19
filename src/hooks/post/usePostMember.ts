import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { usePostGithubUserMutation } from "../../queries/github/github.query";
import useModal from "../util/useModal";

const usePostMember = () => {
  const [githubId, setGithubId] = useState("");
  const postGithubUserMutation = usePostGithubUserMutation();
  const queryClient = useQueryClient();
  const { close } = useModal();
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
          queryClient.invalidateQueries(["totalRank/getTotalRank"]);
          queryClient.invalidateQueries(["weekRank/getWeekRank"]);
          queryClient.invalidateQueries(["pullrequestRank/getPullRequestRank"]);
          setGithubId("");
          close();
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
