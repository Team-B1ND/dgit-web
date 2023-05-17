import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RankingFallbackLoader from "../components/common/FallBackLoader/Ranking";
import RankingList from "../components/common/RankingList";
import PR from "../components/Ranking/PR";

const PullRequestRankingPage = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#252525",
        padding: 40,
        boxSizing: "border-box",
      }}
    >
      <RankingList>
        <RankingList.Hero>Pull-Request</RankingList.Hero>
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Name</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Intro</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Commits</RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <ErrorBoundary fallback={<>Error...</>}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <PR />
            </Suspense>
          </ErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default PullRequestRankingPage;
