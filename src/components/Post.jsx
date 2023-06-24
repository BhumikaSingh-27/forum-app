import React, { useContext, useState } from "react";
import "./style.css";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";

const Post = ({ data }) => {
  const { dispatch } = useContext(DataContext);
  const [bookmark, setBookmark] = useState(false);

  const d = new Date(data?.createdAt);
  return (
    <div className="post" key={data.postId}>
      <div className="post-main">
        <div>
          <div className="vote-icons">
            <div
              onClick={() => dispatch({ type: "UPVOTE", payload: data.postId })}
            >
              <ArrowDropUpOutlinedIcon fontSize="large" fontWeight="bold" />
            </div>
            <p className="name">
              {" "}
              {data?.downvotes > data?.upvotes ? (
                <b>{data?.upvotes - data?.downvotes}</b>
              ) : (
                <b>{data?.upvotes - data?.downvotes}</b>
              )}
            </p>
            <div
              onClick={() =>
                dispatch({ type: "DOWNVOTE", payload: data.postId })
              }
            >
              <ArrowDropDownOutlinedIcon fontSize="large" />{" "}
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="title">
            {" "}
            <div className="image"></div>{" "}
            <div>
              posted by <span className="name">@{data.username}</span> -{" "}
              {d.getMinutes()}m
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
            <NavLink to={`/${data.postId}`}>
              {" "}
              <div>
                <ChatBubbleOutlineRoundedIcon />
              </div>{" "}
            </NavLink>
            <div onClick={() => setBookmark(!bookmark)}>
              {bookmark ? <BookmarkIcon /> : <BookmarkBorderRoundedIcon />}
            </div>
            <ShareRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
