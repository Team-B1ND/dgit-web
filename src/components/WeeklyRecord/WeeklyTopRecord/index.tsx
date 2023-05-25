import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useGetWeekRankTop } from "../../../queries/github/github.query";
import {
  WeeklyTopBigItemBox,
  WeeklyTopContainer,
  WeeklyTopItemBox,
} from "./style";
import RankingBox from "../../Ranking/Weekly";
const WeeklyTopRecord = () => {
  const { data } = useGetWeekRankTop();

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
