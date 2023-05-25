import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";
import { AiOutlineCrown } from "react-icons/ai";
export const NAV_ITEM = [
  {
    title: "COMMIT",
    link: "/",
    icon: HiOutlinePencilAlt,
  },
  {
    title: "REPOSITORY",
    link: "/repostars-ranking",
    icon: AiOutlineStar,
  },
  {
    title: "PULL-REQUEST",
    link: "/pr-ranking",
    icon: BiGitPullRequest,
  },
  {
    title: "WEEKKLY-RECORD",
    link: "/record",
    icon: AiOutlineCrown,
  },
];
