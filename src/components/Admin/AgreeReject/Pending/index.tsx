import { useGetPendingQuery } from "../../../../queries/member/member.query";
import RankingList from "../../../common/RankingList";
import * as P from "./style";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { usePendingApproval } from "../../../../hooks/patch/usePendingApproval";
import { usePendingRefusal } from "../../../../hooks/patch/usePendingRefusal";

const Pending = () => {
  const { data } = useGetPendingQuery();
  const { onPatchApproval } = usePendingApproval();
  const { onPatchRefusal } = usePendingRefusal();

  return (
    <RankingList.Table.TBody>
      {data?.data.map((data) => {
        return (
          <>
            <tr key={data.githubId}>
              <RankingList.Table.TBody.Td>
                <P.ProfileImg src={data.userImage} />
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.name}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.email}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.githubId}
              </RankingList.Table.TBody.Td>

              <RankingList.Table.TBody.Td>
                <P.PatchButton
                  isPatch={false}
                  onClick={() => onPatchApproval(data.githubId)}
                >
                  <BsCheckLg />
                </P.PatchButton>

                <P.PatchButton
                  isPatch={true}
                  onClick={() => onPatchRefusal(data.githubId)}
                >
                  <AiOutlineClose
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  />
                </P.PatchButton>
              </RankingList.Table.TBody.Td>
            </tr>
          </>
        );
      })}
    </RankingList.Table.TBody>
  );
};

export default Pending;
