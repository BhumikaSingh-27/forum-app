import React from "react";
import "./style.css";

const Sort = () => {
  return (
    <div className="sort-section">
      <h3>Sort By</h3>
      <select>
        <option value="latest">Latest post</option>
        <option value="trending">Most upvoted post</option>
      </select>
    </div>
  );
};

export default Sort;
