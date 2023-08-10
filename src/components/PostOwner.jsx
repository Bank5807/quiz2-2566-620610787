import { comments } from "@/libs/comments";
import { Reply } from "./Reply";

export const PostOwner = ({
  userImagePath,
  username,
  postText,
  likeNum,
  comments,
}) => {
  return;
  <div>
    <img
      src={userImagePath}
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span>{username}</span>
    <span>{postText}</span>
    {likeNum < 0 ? <span>{likeNum}</span> : <span></span>}
    <span>{comments}</span>
  </div>;
};
