import { customAxios } from "../../lib/axios/customAxios";
import { MemberResponse } from "../../types/member/Member.type";
import { MemberRepository } from "./MemberRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMember(): Promise<MemberResponse> {
    const { data } = await customAxios.get("/user/my");
    return data;
  }
}
export default new MemberRepositoryImpl();
