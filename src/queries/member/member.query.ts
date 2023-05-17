import { useQuery } from "@tanstack/react-query";
import MemberRepositoryImpl from "../../repositories/member/MemberRepositoryImpl";

export const useGetMemberQuery = () =>
  useQuery(["member/getMember"], () => MemberRepositoryImpl.getMember(), {
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });
