export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
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
      <span>{replyText}</span>
      {likeNum < 0 ? <span>{likeNum}</span> : <span></span>}
    </div>
  );
};
