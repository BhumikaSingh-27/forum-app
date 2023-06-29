import React from "react";
import "./style.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div>
      <div className="bottom-nav">
        <div className="nav-bottom">
          <div className="small-nav">
            <div>
              <HomeOutlinedIcon fontSize="large" />
            </div>
            <div>
              <RocketOutlinedIcon fontSize="large" />
            </div>
            <div>
              <BookmarkBorderOutlinedIcon fontSize="large" />
            </div>
            <div>
              <AccountCircleOutlinedIcon fontSize="large" />
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="side-box">
          <HomeOutlinedIcon fontSize="large" /> <h5>Home</h5>
        </div>
        <div className="side-box">
          <RocketOutlinedIcon fontSize="large" /> <p>Explore</p>
        </div>
        <div className="side-box">
          <BookmarkBorderOutlinedIcon fontSize="large" /> <p>Bookmarks</p>
        </div>
        <div className="side-box">
          <AccountCircleOutlinedIcon fontSize="large" /> <p>Profile</p>
        </div>
        <div className="footer">
          <div className="profile">
            <div className="image img">
              <img src="" alt="" />
            </div>
            <div>
              <h4>Tanay Pratap</h4>
              <p>@tanaypratap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
