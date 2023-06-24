import React, { useContext } from "react";
import Post from "../components/Post";
import { DataContext } from "../context/DataContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Sort from "../components/Sort";

const Home = () => {
  const { state } = useContext(DataContext);
  return (
    <div>
      
      <div className="section">
        <Sidebar />
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
        <div>
          <Sort />
        </div>
      </div>
    </div>
  );
};

export default Home;
