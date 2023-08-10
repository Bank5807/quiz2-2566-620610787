import { comments } from "@/libs/comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  return (
    <div>
      <img
        src={userImagePath}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span>{username}</span>
      <span>{commentText}</span>
      {likeNum < 0 ? <span>{likeNum}</span> : <span>hidden</span>}
      {/* map-loop render Reply component here */}
      <span>{replies}</span>
      {replies.map((replies) => (
        <Comment
          userImagePath={replies.userImagePath}
          username={replies.username}
          replyText={replies.commentText}
          likeNum={replies.likeNum}
          key={replies.username}
        />
      ))}
    </div>
  );
};
