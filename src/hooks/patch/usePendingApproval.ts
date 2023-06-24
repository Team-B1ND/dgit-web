import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { usePatchPendingApprovalMutation } from "../../queries/member/member.query";
import { QUERY_KEYS } from "../../queries/queryKey";

export function usePendingApproval() {
  const patchPendingApprovalMutation = usePatchPendingApprovalMutation();
  const queryClient = useQueryClient();

  const onPatchApproval = useCallback((githubId: string) => {
    const answer = window.confirm("유저를 수락하시겠습니까?");
    if (answer === true) {
      patchPendingApprovalMutation.mutate(
        {
          githubId: githubId,
        },
        {
          onSuccess: () => {
            B1ndToast.showSuccess("유저가 수락되었습니다");
            queryClient.invalidateQueries([QUERY_KEYS.pending]);
          },
          onError: () => {
            B1ndToast.showError("유저 수락 실패");
          },
        }
      );
    }
  }, []);

  return { onPatchApproval };
}
