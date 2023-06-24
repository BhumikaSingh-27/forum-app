import React from "react";
import "./style.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

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
              <h4>{user.comment}</h4>
            </div>
            <hr />
            <div className="post-icons">
              <FavoriteBorderIcon />
              <ShareRoundedIcon />
              <BookmarkBorderRoundedIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
