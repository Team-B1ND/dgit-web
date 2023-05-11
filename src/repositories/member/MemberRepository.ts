import { MemberResponse } from "../../types/member/Member.type";

export interface MemberRepository {
  getMember(): Promise<MemberResponse>;
}
