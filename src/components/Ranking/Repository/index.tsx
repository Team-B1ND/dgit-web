import { Suspense } from "react";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import RankingFallbackLoader from "components/common/FallBackLoader/Ranking";
import RankingList from "components/common/RankingList";
import RepositoryList from "./RepositoryList";



const RepositoryRankingPage = () => {

    return(
        <RankingList>
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
                <DodamErrorBoundary text="에러발생" showButton={true}>
                    <Suspense fallback={<RankingFallbackLoader />}>
                        <RepositoryList showDeleteButton={false} />
                    </Suspense>
                </DodamErrorBoundary>
          </RankingList.Table>
        </RankingList>
    )
}

export default RepositoryRankingPage;