import { QueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePatchPendingApprovalMutation } from "../../queries/member/member.query";
import { QUERY_KEYS } from "../../queries/queryKey";

export function usePendingApproval() {
  const test2 = usePatchPendingApprovalMutation();
  const queryClient = new QueryClient();
  const onPatchApproval = useCallback((githubId: string) => {
    const answer = window.confirm("유저를 수락하시겠습니까?");
    if (answer === true) {
      test2.mutate(
        {
          githubId: githubId,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["/github-user/allow"]);
            console.log("유저 수락 성공");
          },
          onError: () => {
            console.log("유저 수락 실패");
          },
        }
      );
    }
  }, []);

  return { onPatchApproval };
}
