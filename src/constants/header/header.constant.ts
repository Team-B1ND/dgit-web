import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitPullRequest } from "react-icons/bi";

export const HEADER_ITEM = [
  {
    title: "COMMIT",
    link: "/",
    icon: HiOutlinePencilAlt,
  },
  {
    title: "REPOSITORY",
    link: "/repository",
    icon: AiOutlineStar,
  },
  {
    title: "PULL-REQUEST",
    link: "/pr-ranking",
    icon: BiGitPullRequest,
  },
];
