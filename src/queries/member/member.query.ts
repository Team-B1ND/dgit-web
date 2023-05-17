import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import MemberRepositoryImpl from "../../repositories/member/MemberRepositoryImpl";
import { MemberResponse } from "../../types/member/Member.type";

export const useGetMemberQuery = (
  options?: UseQueryOptions<
    MemberResponse,
    AxiosError,
    MemberResponse,
    ["member/getMember"]
  >
) =>
  useQuery(["member/getMember"], () => MemberRepositoryImpl.getMember(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
