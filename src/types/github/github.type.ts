import { Response } from "../util/Response.type";

export interface Repository {
  repositoryName: string;
  totalStars: number;
  githubId: string;
  githubUserImage: string;
}

export interface RepositoryResponse extends Response {
  data: Repository[];
}

export interface Rank {
  githubId: string;
  contributions: number;
  userImage: string;
  bio: string;
}

export interface RankResponse extends Response {
  data: Rank[];
}
