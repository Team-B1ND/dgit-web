import { customAxios } from "../../lib/axios/customAxios";
import {
  MemberResponse,
  PendingUserResponse,
} from "../../types/member/Member.type";
import { MemberRepository } from "./MemberRepository";
import { Response } from "../../types/util/Response.type";
import { GithubUserParam } from "../github/GithubRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMember(): Promise<MemberResponse> {
    const { data } = await customAxios.get("/user/my");
    return data;
  }

  public async getPendingUser(): Promise<PendingUserResponse> {
    const { data } = await customAxios.get("/github-user/pending");
    console.log(data);
    return data;
  }

  public async patchUserApproval({
    githubId,
  }: GithubUserParam): Promise<Response> {
    const { data } = await customAxios.patch("/github-user/allow", {
      githubId,
    });
    console.log(data);
    return data;
  }

  public async patchUserRefusal({
    githubId,
  }: GithubUserParam): Promise<Response> {
    const { data } = await customAxios.patch("/github-user/deny", {
      githubId,
    });
    console.log(data);
    return data;
  }
}
export default new MemberRepositoryImpl();
