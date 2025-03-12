import RankingList from "../../common/RankingList";
import Repository from "../../Ranking/Repository/RepositoryList";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import RankingFallbackLoader from "../../common/FallBackLoader/Ranking";

const EraseRepo = () => {
  return (
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
          <RankingList.Table.THead.Th>Delete</RankingList.Table.THead.Th>
        </RankingList.Table.THead>
        <ErrorBoundary fallback={<>Error...</>}>
          <Suspense fallback={<RankingFallbackLoader />}>
            <Repository showDeleteButton={true} />
          </Suspense>
        </ErrorBoundary>
      </RankingList.Table>
    </RankingList>
  );
};

export default EraseRepo;
