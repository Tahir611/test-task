import React from "react";
import PositionalCards from "./PositionalCards";
import icon from "../assets/images/Icon.png";
import darkIcon from "../assets/images/dark-Icon.png";
import circle from "../assets/images/circle.png";
import whiteCircle from "../assets/images/white-Vector.png"
const Banner = ({ isDark }) => {
  return (
    <React.Fragment>
      {/* CARDS */}

      {/* <PositionalCards isDark={isDark} /> */}

      {/* BANNER TEXT */}

      <div className="banner-section position-relative">
        <div className="row w-100">
          <div className="col-md-6   ban-head-col">
            <h1
              style={!isDark ? { color: "#000" } : { color: "#fff" }}
              className="banner-heading"
            >
              FINANCES
              <div className="d-flex align-items-center py-3">
                <div className={`position-relative ${!isDark ? "lets_start_main" : "lets_start_main_dark"}`}>
                  <div className={`${!isDark ? "lets_start" : "lets_start_dark"} d-flex`}>
                    {" "}
                    <img src={!isDark ? circle : whiteCircle} alt="" srcset="" /> &nbsp; Let's start
                  </div>
                </div>
                <span className="ps-3">AND</span>
              </div>
              FREEDOM
            </h1>

            <div className="row increase d-none">
              <div className="col-md-6">
                <div className="wealth">
                  <h4
                    className={
                      !isDark ? "white-banner-text" : "dark-banner-text"
                    }
                  >
                    Increase <br /> of your wealth
                  </h4>
                </div>
              </div>
            </div>
            <div className="advice d-flex pt-5">
              <img src={!isDark ? icon : darkIcon} alt="icon" />
              <p
                className={`ps-4 ${
                  !isDark ? "white-banner-text" : "dark-banner-text"
                }`}
              >
                Make Plans, save your income more to <br /> save your life in
                the future.
              </p>
            </div>
          </div>

          <div className="col-md-6 position-relative zIndex">
            <PositionalCards />
          </div>
        </div>
        <div className="row w-100 position-relative z-2">
          <div className="col-lg-5">
            <h4
              className={`wealth ${
                !isDark ? "white-banner-text" : "dark-banner-text"
              }`}
            >
              Increase <br /> of your wealth
            </h4>
          </div>
          <div className="col-lg-7">
            <div className="revenue-card">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
