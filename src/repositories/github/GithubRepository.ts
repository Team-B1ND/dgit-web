import {
  PRRankResponse,
  RankResponse,
  RepositoryResponse,
  TopRankResponse,
  WeeklyRankResponse,
} from "../../types/github/github.type";
import { Response } from "../../types/util/Response.type";

export interface GithubRepository {
  postGithubUser({ githubId }: GithubUserParam): Promise<Response>;

  patchGithubUser({ githubId }: GithubUserParam): Promise<Response>;

  getRepository(): Promise<RepositoryResponse>;

  postRepository({
    githubId,
    repositoryName,
  }: postRepositoryParam): Promise<Response>;

  getUserWeekRank(): Promise<RankResponse>;

  getUserTotalRank(): Promise<RankResponse>;

  getUserPullRequestRank(): Promise<PRRankResponse>;

  getWeeklyRank({ page }: getWeeklyRankParam): Promise<WeeklyRankResponse>;

  getWeeklyTopRank(): Promise<TopRankResponse>;
}

export interface GithubUserParam {
  githubId: string;
}

export interface postRepositoryParam {
  githubId: string;
  repositoryName: string;
}

export interface getWeeklyRankParam {
  page: number;
}

export interface getRepositoryId {
  repositoryId: number;
}
