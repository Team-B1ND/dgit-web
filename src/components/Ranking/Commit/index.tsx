import { Suspense } from "react";
import { DodamErrorBoundary } from "@b1nd/dds-web";
import RankingFallbackLoader from "components/common/FallBackLoader/Ranking";
import RankingList from "components/common/RankingList";
import TotalCommit from "./Total";
import WeekCommit from "./Week";

interface Props {
    commitType: 'total'|'week';
}

const CommitRankingPage = ({commitType}:Props) => {
    
    return(
        <>
        <RankingList>
             <RankingList.Table>
                <RankingList.Table.THead>
                    <RankingList.Table.THead.Th>Rank</RankingList.Table.THead.Th>
                    <RankingList.Table.THead.Th>Profile</RankingList.Table.THead.Th>
                    <RankingList.Table.THead.Th>Github</RankingList.Table.THead.Th>
                    <RankingList.Table.THead.Th>Name</RankingList.Table.THead.Th>
                    <RankingList.Table.THead.Th>Intro</RankingList.Table.THead.Th>
                    <RankingList.Table.THead.Th>Commits</RankingList.Table.THead.Th>
                </RankingList.Table.THead>
                <DodamErrorBoundary text="에러발생" showButton={true}>
                    <Suspense fallback={<RankingFallbackLoader />}>
                        {commitType === "total" ? <TotalCommit /> : <WeekCommit />}
                    </Suspense>
                </DodamErrorBoundary>
          </RankingList.Table>
          </RankingList>
        </>
    )
}

export default CommitRankingPage;