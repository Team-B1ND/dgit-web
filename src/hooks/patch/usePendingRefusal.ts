import { B1ndToast } from "@b1nd/b1nd-toastify";
import { QueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePatchPendingRefusalMutation } from "../../queries/member/member.query";
import { QUERY_KEYS } from "../../queries/queryKey";

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
            B1ndToast.showSuccess("유저 거절 성공");
            queryClient.invalidateQueries([QUERY_KEYS.pending]);
          },
          onError: () => {
            B1ndToast.showError("유저 거절 실패");
          },
        }
      );
    }
  }, []);

  return { onPatchRefusal };
}
