import { Response } from "../util/Response.type";

export interface MemberResponse {
  data: {
    email: string;
    name: string;
    githubId: string;
    userImage: string;
  };
}

export interface PendingUser {
  githubId: string;
  name: string;
  email: string;
  userImage: string;
  bio: string;
}

export interface PendingUserResponse extends Response {
  data: PendingUser[];
}
