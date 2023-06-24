import React, { useContext } from "react";
import "./style.css";
import { DataContext } from "../context/DataContext";

const Sort = () => {
    const {dispatch} = useContext(DataContext)
  return (
    <div className="sort-section">
      <h3>Sort By</h3>
      <select onChange={(e)=>dispatch({type:"FILTER", payload:e.target.value})}>
        <option value="latest">Latest post</option>
        <option value="trending">Most upvoted post</option>
      </select>
    </div>
  );
};

export default Sort;
