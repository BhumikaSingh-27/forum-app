import React from "react";
import "./style.css";

const Comment = ({ data }) => {
  const d = new Date(data.comments.createdAt);
  return (
    <div>
      {data.comments.map((user) => (
        <div className="comment-section">
          {" "}
          <div className="image"></div>
          <div className="comment-data">
            <div>
              posted by @{user?.username}- {d.getMinutes()} m{" "}
            </div>
            <div>replying to @{data?.username}</div>
            <div>
              <p>{user.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
