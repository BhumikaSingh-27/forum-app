import React, { useContext } from "react";
import "./style.css";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { DataContext } from "../context/DataContext";

const Post = ({ data }) => {
  const { dispatch } = useContext(DataContext);

  const d = new Date(data.createdAt);
  return (
    <div className="post">
      <div className="post-main">
        <div>
          <div className="vote-icons">
            <div
              onClick={() => dispatch({ type: "UPVOTE", payload: data.postId })}
            >
              <ArrowDropUpOutlinedIcon fontSize="large" />
            </div>
            <p>{data.upvotes - data.downvotes}</p>
            <div onClick={() => dispatch({ type: "DOWNVOTE", payload: data.postId })}><ArrowDropDownOutlinedIcon fontSize="large" /> </div>
          </div>
        </div>
        <div className="post-container">
          <div className="title">
            {" "}
            <div className="image"></div>{" "}
            <div>
              posted by @{data.username} - {d.getMinutes()}m
            </div>
          </div>
          <div>
            <h2>{data.post}</h2>
          </div>

          <div className="tags">
            {data.tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
          <div>
            <p>{data.postDescription}</p>
          </div>
          <hr />
          <div className="post-icons">
            <ChatBubbleOutlineRoundedIcon />
            <BookmarkBorderRoundedIcon />
            <ShareRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
