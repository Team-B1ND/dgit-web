import { Response } from "../util/Response.type";

export interface Repository {
  repositoryId: number;
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
  name: string;
  userImage: string;
  bio: string;
}

export interface PRRankResponse {
  data: PRRank[];
}

export interface PRRank {
  githubId: string;
  name: string;
  pullRequest: number;
  userImage: string;
  bio: string;
}

export interface RankResponse extends Response {
  data: Rank[];
}

export interface WeeklyRank {
  rankedDate: string;
  githubId: string;
  name: string;
  contributions: number;
  userImage: string;
  bio: string;
}

export interface TopRank {
  githubId: string;
  name: string;
  winCount: number;
  userImage: string;
  bio: string;
}

export interface TopRankResponse {
  data: TopRank[];
}

export interface WeeklyRankResponse {
  data: WeeklyRank[];
  nextPage: number;
}
