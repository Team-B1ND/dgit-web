import { useGetWeeklyTopRankQuery } from "queries/github/github.query";
import RankingBox from "../WeeklyRanking";
import { WeeklyTopContainer } from "./style";

const WeeklyTopRecord = () => {
  const { data } = useGetWeeklyTopRankQuery({ suspense: true });

  return (
    <WeeklyTopContainer>
      {data?.data && (
        <>
          <RankingBox data={data?.data[1]} rank={2} />
          <RankingBox data={data.data[0]} rank={1} />
          <RankingBox data={data?.data[2]} rank={3} />
        </>
      )}
    </WeeklyTopContainer>
  );
};

export default WeeklyTopRecord;
