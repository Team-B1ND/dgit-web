import { useGetTotalRankQuery } from "../../../queries/github/github.query";
import Medal from "../../common/Medal";
import Profile from "../../common/Profile";
import RankingList from "../../common/RankingList";
import { ProfileImg } from "./style";

const Commit = () => {
  const { data } = useGetTotalRankQuery({ suspense: true });

  return (
    <RankingList.Table.TBody>
      {data?.data.map((data, idx) => {
        const rank = idx + 1;
        return (
          <>
            <tr>
              <RankingList.Table.TBody.Td>
                <Medal rank={rank}>{rank}</Medal>
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                <ProfileImg src={data.userImage} />
              </RankingList.Table.TBody.Td>{" "}
              <RankingList.Table.TBody.Td>
                {data.githubId}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.name}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.bio}
              </RankingList.Table.TBody.Td>
              <RankingList.Table.TBody.Td>
                {data.contributions}
              </RankingList.Table.TBody.Td>
            </tr>
          </>
        );
      })}
    </RankingList.Table.TBody>
  );
};
export default Commit;
