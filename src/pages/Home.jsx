import React, { useContext } from "react";
import Post from "../components/Post";
import { DataContext } from "../context/DataContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const Home = () => {
  const { state } = useContext(DataContext);

  const data = state.filter
    ? state.filter === "latest"
      ? [...state.posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : [...state.posts].sort((a, b) => b.upvotes - a.upvotes)
    : [...state.posts];
  return (
    <div>
      <div className="section">
        <Sidebar />
        
        <div className="home-container">
          <h2>Latest Post</h2>
          <div>
            {data.map((data) => (
              <div key={data.postId}>
                <Post data={data} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default Home;
