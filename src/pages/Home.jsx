import React, { useContext } from "react";
import Post from "../components/Post";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const { state } = useContext(DataContext);
  return (
    <div className="home-container">
      <h2>Latest Post</h2>
      <div>
        {state.posts.map((data) => (
          <div key={data.postId}>
            <Post data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
