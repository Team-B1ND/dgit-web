import { Suspense } from "react";
import RankingList from "../components/common/RankingList";
import { ErrorBoundary } from "react-error-boundary";
import RankingFallbackLoader from "../components/common/FallBackLoader/Ranking";
import Header from "../components/common/Header";
import { useRecoilValue } from "recoil";
import { commitRankTypeAtom } from "../store/commit/commit.store";
import TotalCommit from "../components/Ranking/Commit";
import WeekCommit from "../components/Ranking/Commit/Week";

const CommitRankingPage = () => {
  const commitType = useRecoilValue(commitRankTypeAtom);
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
        <Header>Commits</Header>
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
              {commitType === "total" ? <TotalCommit /> : <WeekCommit />}
            </Suspense>
          </ErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default CommitRankingPage;
