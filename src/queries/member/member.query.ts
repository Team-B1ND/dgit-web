import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import MemberRepositoryImpl from "../../repositories/member/MemberRepositoryImpl";
import { MemberResponse } from "../../types/member/Member.type";
import { GithubUserParam } from "../../repositories/github/GithubRepository";
import { UserResponse } from "types/github/github.type";

export const useGetMemberQuery = (
  options?: UseQueryOptions<
    MemberResponse,
    AxiosError,
    MemberResponse,
    [string]
  >
) =>
  useQuery([QUERY_KEYS.member.getMemer], () => MemberRepositoryImpl.getMember(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

  export const useGetMyUserQuery = (
      options?: UseQueryOptions<
        UserResponse,
        AxiosError,
        UserResponse,
        [string]
      >
    ) =>
      useQuery(
        [QUERY_KEYS.member.getMyUser],
        () => MemberRepositoryImpl.getMyUser(),
        {
          ...options,
          staleTime: 1000 * 60 * 60,
          cacheTime: 1000 * 60 * 60,
        }
      );

export const useGetPendingQuery = () =>
  useQuery([QUERY_KEYS.pending], () => MemberRepositoryImpl.getPendingUser(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const usePatchPendingApprovalMutation = () => {
  const mutation = useMutation(({ githubId }: GithubUserParam) =>
    MemberRepositoryImpl.patchUserApproval({ githubId })
  );
  return mutation;
};

export const usePatchPendingRefusalMutation = () => {
  const mutation = useMutation(({ githubId }: GithubUserParam) =>
    MemberRepositoryImpl.patchUserRefusal({ githubId })
  );
  return mutation;
};
