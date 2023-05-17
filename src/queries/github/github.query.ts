import { useMutation, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  GithubUserParam,
  postRepositoryParam,
} from "../../repositories/github/GithubRepository";
import GitRepositoryImpl from "../../repositories/github/GithubRepositoryImpl";
import {
  PRRankResponse,
  RankResponse,
  RepositoryResponse,
} from "../../types/github/github.type";

export const useGetRepositoryQuery = (
  //레포지토리랭킹
  options?: UseQueryOptions<
    RepositoryResponse,
    AxiosError,
    RepositoryResponse,
    ["repository/getRepository"]
  >
) =>
  useQuery(
    ["repository/getRepository"],
    () => GitRepositoryImpl.getRepository(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetWeekRankQuery = (
  //주간 커밋 랭킹
  options?: UseQueryOptions<
    RankResponse,
    AxiosError,
    RankResponse,
    ["weekRank/getWeekRank"]
  >
) =>
  useQuery(["weekRank/getWeekRank"], () => GitRepositoryImpl.getWeekRank(), {
    ...options,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

export const useGetTotalRankQuery = (
  //전체 커밋랭킹
  options?: UseQueryOptions<
    RankResponse,
    AxiosError,
    RankResponse,
    ["totalRank/getTotalRank"]
  >
) =>
  useQuery(["totalRank/getTotalRank"], () => GitRepositoryImpl.getTotalRank(), {
    ...options,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

export const useGetPullRequestRank = (
  options?: UseQueryOptions<
    PRRankResponse,
    AxiosError,
    PRRankResponse,
    ["pullrequestRank/getPullRequestRank"]
  >
) =>
  useQuery(
    ["pullrequestRank/getPullRequestRank"],
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
