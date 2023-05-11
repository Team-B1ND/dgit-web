import { useMutation, useQuery } from "react-query";
import { QUERY_KEYS } from "../\bqueryKey";
import {
  GithubUserParam,
  postRepositoryParam,
} from "../../repositories/github/GithubRepository";
import GitRepositoryImpl from "../../repositories/github/GithubRepositoryImpl";

export const useGetRepositoryQuery = () =>
  useQuery(
    QUERY_KEYS.github.getRepository,
    () => GitRepositoryImpl.getRepository(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

export const useGetWeekRankQuery = () =>
  useQuery(QUERY_KEYS.github.rank.week, () => GitRepositoryImpl.getWeekRank(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });

export const useGetTotalRankQuery = () =>
  useQuery(
    QUERY_KEYS.github.rank.total,
    () => GitRepositoryImpl.getTotalRank(),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 5,
    }
  );

export const useGetPullRequestRank = () =>
  useQuery(
    QUERY_KEYS.github.rank.pullrequest,
    () => GitRepositoryImpl.getPullRequestRank(),
    {
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
