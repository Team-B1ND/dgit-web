import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ProfileFallbackLoader from "../common/FallBackLoader/Profile";
import RankingFallbackLoader from "../common/FallBackLoader/Ranking";
import RankingBoxFallbackLoader from "../common/FallBackLoader/RankingBox";
import Header from "../common/Header";
import RankingList from "../common/RankingList";
import { WeeklyRecordRecordContainer } from "./style";
import WeeklyRecordItem from "./WeeklyRecordItem";
import WeeklyTopRecord from "./WeeklyTopRecord";

const WeeklyRecord = () => {
  return (
    <WeeklyRecordRecordContainer>
      <Header>WEEKLY RECORD</Header>
      <ErrorBoundary fallback={<>Error...</>}>
        <Suspense fallback={<RankingBoxFallbackLoader />}>
          <WeeklyTopRecord />
        </Suspense>
      </ErrorBoundary>
      <RankingList>
        <RankingList.Table>
          <ErrorBoundary fallback={<>Error...</>}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <WeeklyRecordItem />
            </Suspense>
          </ErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </WeeklyRecordRecordContainer>
  );
};

export default WeeklyRecord;
