"use client";

import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/profile.jpeg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5">
              Tanat Wipasakunden 620610787
            </span>
          </div>

          <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">100 คน</span>
          </div>
          <hr className="m-0 border" />
        </div>

        {/* map-loop render Comment component here */}
        {comments.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            replies={comments.replies}
            key={comments.username}
          />
        ))}
      </div>
    </div>
  );
}
