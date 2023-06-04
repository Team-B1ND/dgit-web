import { QueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useDeleteRepositoryQuery } from "../../queries/github/github.query";

export function useDeleteRepositroy() {
  const test = useDeleteRepositoryQuery();
  const queryClient = new QueryClient();
  const onDeleteRepo = useCallback((repositoryId: number) => {
    const answer = window.confirm("레포 삭제?");
    if (answer === true) {
      test.mutate(
        {
          repositoryId: repositoryId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["github-repository"]);
            console.log("댓글삭제성공");
          },
          onError: () => {
            console.log("댓들삭제실패");
          },
        }
      );
    }
  }, []);

  return { onDeleteRepo };
}
