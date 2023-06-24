import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Comment from "../components/Comment";

const PostLanding = () => {
  const { id } = useParams();
  const { state } = useContext(DataContext);

  const postData = state?.posts?.find(({ postId }) => postId.toString() === id);
    console.log(postData)

  return (
    <div className="landing">
      <Sidebar />

      <div>
        <h2>
          {" "}
          <NavLink to="/">
            <KeyboardBackspaceIcon />
          </NavLink>
          Post
        </h2>
        <Post data={postData} />
        <div>
          <Comment data={postData} />
        </div>
      </div>
    </div>
  );
};

export default PostLanding;
