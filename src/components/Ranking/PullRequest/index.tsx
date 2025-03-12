import { Suspense } from "react";
import RankingFallbackLoader from "../../common/FallBackLoader/Ranking";

import RankingList from "../../common/RankingList";
import PullRequest from "./pullRequestList";
import { DodamErrorBoundary } from "@b1nd/dds-web";

const PullRequestRankingPage = () => {
  return (
    <>
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
          <DodamErrorBoundary text="에러 발생" showButton={true}>
            <Suspense fallback={<RankingFallbackLoader />}>
              <PullRequest />
            </Suspense>
          </DodamErrorBoundary>
        </RankingList.Table>
      </RankingList>
    </>
  );
};

export default PullRequestRankingPage;
