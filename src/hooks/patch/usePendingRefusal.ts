import { QueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePatchPendingRefusalMutation } from "../../queries/member/member.query";

export function usePendingRefusal() {
  const patchPendingRefusalMutation = usePatchPendingRefusalMutation();
  const queryClient = new QueryClient();
  const onPatchRefusal = useCallback((githubId: string) => {
    const answer = window.confirm("유저를 거절하시겠습니까?");
    if (answer === true) {
      patchPendingRefusalMutation.mutate(
        {
          githubId: githubId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["/github-user/deny"]);
            console.log("유저 거절 성공");
          },
          onError: () => {
            console.log("유저 거절 실패");
          },
        }
      );
    }
  }, []);

  return { onPatchRefusal };
}
