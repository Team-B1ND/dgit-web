import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import RankingFallbackLoader from "../components/common/FallBackLoader/Ranking";

import RankingList from "../components/common/RankingList";
import Repository from "../components/Ranking/Repository";

const RepoStarsRankingPage = () => {
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
        {/* <Header>Repository Star</Header> */}
        <RankingList.Table>
          <RankingList.Table.THead>
            <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>
              Repository Name
            </RankingList.Table.THead.Th>
            <RankingList.Table.THead.Th>Total Stars</RankingList.Table.THead.Th>
          </RankingList.Table.THead>
          <ErrorBoundary fallback={<>Error...</>}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <Repository showDeleteButton={false} />
            </Suspense>
          </ErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </div>
  );
};

export default RepoStarsRankingPage;
