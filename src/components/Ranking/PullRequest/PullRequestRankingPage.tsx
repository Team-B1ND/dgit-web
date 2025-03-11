import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RankingFallbackLoader from "../../common/FallBackLoader/Ranking";

import RankingList from "../../common/RankingList";
import PullRequest from ".";

const PullRequestRankingPage = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: 40,
        boxSizing: "border-box",
      }}
    >
      <RankingList>
        
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Name</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Intro</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>
              Pull-Request
            </RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <ErrorBoundary fallback={<>Error...</>}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <PullRequest />
            </Suspense>
          </ErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default PullRequestRankingPage;
