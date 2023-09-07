import React from "react";
import picture from "../assets/images/man-Image.png";
import baloon from "../assets/images/Image.png";
import apple from "../assets/images/apple-icon.png";
import addIcon from "../assets/images/add_icon.png";
import darkIcon from "../assets/images/dark-Icon.png"
import circle from "../assets/images/circle.png"
import icon from "../assets/images/Icon.png";
const PositionalCards = ({ isDark }) => {
  return (
    <React.Fragment>
      <div className="row w-100">
        <div className="col-lg-6">
          <div className={`img ${!isDark ? "light-img-bg" : "dark-img-bg"}`}>
            <img src={picture} alt="user" />
          </div>
          <div className="add-icon text-end pe-4 pt-4">
            <img src={addIcon} alt="add-icon" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="download-box ">
            <h2>Download <br /> app now</h2>
            <img src={baloon} alt="baloon" />
            <p>14 day trial</p>
            <div className="apple-icon">
              <img src={apple} alt="apple-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="revenue-card d-none">
        <p>Revenue</p>
        <h1>32,956</h1>
        <div className="d-flex justify-content-between py-3 align-items-end">
          <span>+156%</span>
          <div className="for-rect align-items-end d-flex">
            <div className="me-1"></div>
            <div className="mx-1"></div>
            <div className="mx-1"></div>
            <div className="ms-1"></div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default PositionalCards;
