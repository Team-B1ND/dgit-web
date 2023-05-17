import {
  PRRankResponse,
  RankResponse,
  RepositoryResponse,
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

  getWeekRank(): Promise<RankResponse>;

  getTotalRank(): Promise<RankResponse>;

  getPullRequestRank(): Promise<PRRankResponse>;
}

export interface GithubUserParam {
  githubId: string;
}

export interface postRepositoryParam {
  githubId: string;
  repositoryName: string;
}