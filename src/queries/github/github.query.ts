import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../\bqueryKey";
import {
  GithubUserParam,
  postRepositoryParam,
} from "../../repositories/github/GithubRepository";
import GithubRepositoryImpl from "../../repositories/github/GithubRepositoryImpl";
import GitRepositoryImpl from "../../repositories/github/GithubRepositoryImpl";
import {
  PRRankResponse,
  RankResponse,
  RepositoryResponse,
  TopRankResponse,
  WeeklyRankResponse,
} from "../../types/github/github.type";

export const useGetRepositoryQuery = (
  //레포지토리랭킹
  options?: UseQueryOptions<
    RepositoryResponse,
    AxiosError,
    RepositoryResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEYS.github.getRepository],
    () => GitRepositoryImpl.getRepository(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetWeekRankQuery = (
  //주간 커밋 랭킹
  options?: UseQueryOptions<RankResponse, AxiosError, RankResponse, [string]>
) =>
  useQuery(
    [QUERY_KEYS.github.rank.week],
    () => GitRepositoryImpl.getWeekRank(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetTotalRankQuery = (
  //전체 커밋랭킹
  options?: UseQueryOptions<RankResponse, AxiosError, RankResponse, [string]>
) =>
  useQuery(
    [QUERY_KEYS.github.rank.total],
    () => GitRepositoryImpl.getTotalRank(),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

export const useGetPullRequestRank = (
  options?: UseQueryOptions<
    PRRankResponse,
    AxiosError,
    PRRankResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEYS.github.rank.pullrequest],
    () => GitRepositoryImpl.getPullRequestRank(),
    {
      ...options,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

export const usePostGithubUserMutation = () => {
  const mutation = useMutation(({ githubId }: GithubUserParam) =>
    GitRepositoryImpl.postGithubUser({ githubId })
  );
  return mutation;
};

export const usePatchGithubUserMutation = () => {
  const mutation = useMutation(({ githubId }: GithubUserParam) =>
    GitRepositoryImpl.patchGithubUser({ githubId })
  );
  return mutation;
};

export const usePostRepositoryMutation = () => {
  const mutation = useMutation(
    ({ githubId, repositoryName }: postRepositoryParam) =>
      GitRepositoryImpl.postRepository({ githubId, repositoryName })
  );
  return mutation;
};

export const useGetWeeklyRankQuery = (
  options?: UseInfiniteQueryOptions<
    WeeklyRankResponse,
    AxiosError,
    WeeklyRankResponse,
    WeeklyRankResponse,
    [string]
  >
) =>
  useInfiniteQuery(
    [QUERY_KEYS.github.rank.weeklyRank],
    ({ pageParam = 1 }) =>
      GithubRepositoryImpl.getWeeklyRank({ page: pageParam }),
    {
      ...options,
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetWeekRankTop = (
  options?: UseQueryOptions<
    TopRankResponse,
    AxiosError,
    TopRankResponse,
    [string]
  >
) =>
  useQuery(
    [QUERY_KEYS.github.rank.weekRankTop3],
    () => GithubRepositoryImpl.getWeekRankTop(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
