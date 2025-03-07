import React, { useEffect } from "react";
import { useGetWeeklyRankQuery } from "../../../queries/github/github.query";
import Medal from "../../common/Medal";
import RankingList from "../../common/RankingList";
import { ProfileImg } from "../../Ranking/Commit/Total/style";
import { useInView } from "react-intersection-observer";

const WeeklyRecordItem = () => {
  const { data, fetchNextPage } = useGetWeeklyRankQuery({ suspense: true });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <RankingList.Table.TBody>
        {data?.pages.map((page) =>
          page.data.map((data) => {
            return (
              <>
                <tr key={data.githubId}>
                  <RankingList.Table.TBody.Strong>
                    {data.rankedDate}
                  </RankingList.Table.TBody.Strong>
                  <RankingList.Table.TBody.Td>
                    <ProfileImg
                      src={data.userImage}
                      onClick={() =>
                        (window.location.href = `https://github.com/${data.githubId}`)
                      }
                    />
                  </RankingList.Table.TBody.Td>{" "}
                  <RankingList.Table.TBody.Td>
                    {data.githubId}
                  </RankingList.Table.TBody.Td>
                  <RankingList.Table.TBody.Td>
                    {data.name}
                  </RankingList.Table.TBody.Td>
                  <RankingList.Table.TBody.Strong>
                    {data.contributions} commit
                  </RankingList.Table.TBody.Strong>
                </tr>
              </>
            );
          })
        )}
        <div ref={ref}></div>
      </RankingList.Table.TBody>
    </>
  );
};

export default WeeklyRecordItem;
