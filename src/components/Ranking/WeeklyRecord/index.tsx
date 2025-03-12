import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RankingFallbackLoader from "components/common/FallBackLoader/Ranking";
import RankingBoxFallbackLoader from "components/common/FallBackLoader/RankingBox";

import RankingList from "components/common/RankingList";
import { WeeklyRecordRecordContainer } from "./style";
import WeeklyRecordItem from "./WeeklyRecordItem";
import WeeklyTopRecord from "./WeeklyTopRecord";
import { DodamErrorBoundary } from "@b1nd/dds-web";

const WeeklyRecord = () => {
  return (
    <WeeklyRecordRecordContainer>
      
      <DodamErrorBoundary text="에러발생">
        <Suspense fallback={<RankingBoxFallbackLoader />}>
          <WeeklyTopRecord />
        </Suspense>
      </DodamErrorBoundary>
      <RankingList>
        <RankingList.Table>
          <DodamErrorBoundary text="에러발생" showButton={true}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <WeeklyRecordItem />
            </Suspense>
          </DodamErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </WeeklyRecordRecordContainer>
  );
};

export default WeeklyRecord;
