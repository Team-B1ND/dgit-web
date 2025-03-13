import { useGetUserWeekRankQuery } from "../../../../queries/github/github.query";
import Medal from "../../../common/Medal";
import RankingList from "../../../common/RankingList";
import { ProfileImg } from "../Total/style";

const WeekCommit = () => {
  const { data } = useGetUserWeekRankQuery({ suspense: true });

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
                <ProfileImg
                  src={data.userImage}
                  onClick={() =>
                    (window.open(`https://github.com/${data.githubId}`))
                  }
                />
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
              <RankingList.Table.TBody.Strong>
                {data.contributions}
              </RankingList.Table.TBody.Strong>
            </tr>
          </>
        );
      })}
    </RankingList.Table.TBody>
  );
};
export default WeekCommit;
