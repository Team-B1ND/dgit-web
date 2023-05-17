import { customAxios } from "../../lib/axios/customAxios";
import {
  PRRankResponse,
  RankResponse,
  RepositoryResponse,
} from "../../types/github/github.type";
import { Response } from "../../types/util/Response.type";
import {
  GithubRepository,
  GithubUserParam,
  postRepositoryParam,
} from "./GithubRepository";

class GithubRepositoryImpl implements GithubRepository {
  public async postGithubUser({
    githubId,
  }: GithubUserParam): Promise<Response> {
    const { data } = await customAxios.post("/github/user", {
      githubId,
    });
    return data;
  }

  public async patchGithubUser({
    githubId,
  }: GithubUserParam): Promise<Response> {
    const { data } = await customAxios.patch("/github/user", {
      githubId,
    });
    return data;
  }

  public async getRepository(): Promise<RepositoryResponse> {
    const { data } = await customAxios.get("/github/repository");
    return data;
  }

  public async postRepository({
    githubId,
    repositoryName,
  }: postRepositoryParam): Promise<Response> {
    const { data } = await customAxios.post("/github/repository", {
      githubId,
      repositoryName,
    });
    return data;
  }

  public async getWeekRank(): Promise<RankResponse> {
    const { data } = await customAxios.get("/github/week");
    return data;
  }

  public async getTotalRank(): Promise<RankResponse> {
    const { data } = await customAxios.get("/github/total");
    return data;
  }

  public async getPullRequestRank(): Promise<PRRankResponse> {
    const { data } = await customAxios.get("/github/pull-request");
    return data;
  }
}

export default new GithubRepositoryImpl();
