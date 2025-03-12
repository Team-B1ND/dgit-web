export const QUERY_KEYS = {
  github: Object.freeze({
    getRepository: "repository/getRepository",
    rank: {
      week: "weekRank/getWeekRank",
      weeklyRank: "weeklyRank/getWeeklyRank",
      weekRankTop3: "weekRankTop3/getWeekRankTop3",
      total: "totalRank/getTotalRank",
      pullrequest: "pullrequestRank/getPullRequestRank",
    },
  }),
  
  member: {
    getMemer:"member/getMember",
    getMyUser:"myUser"
  },
  pending: "pending/getPendingUser",
};
