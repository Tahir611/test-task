import React from 'react'
import picture from "../assets/images/man-Image.png";
import baloon from "../assets/images/Image.png";
import apple from "../assets/images/apple-icon.png";
import addIcon from "../assets/images/add_icon.png";
import darkIcon from "../assets/images/dark-Icon.png"
import circle from "../assets/images/circle.png"
import icon from "../assets/images/Icon.png";
const Mobile = ({ isDark }) => {
    return (
        <React.Fragment>
            <div className='row mx-0 n align-items-center'>
                <div className="col-8 heromlminus">
                    <div className={`img ${!isDark ? "light-img-bg" : "dark-img-bg"}`}>
                        <img src={picture} alt="user" />
                    </div>
                    <div className="add-icon text-end pe-4 pt-4">
                        <img src={addIcon} alt="add-icon" />
                    </div>
                </div>
                <div className="col-4 pe-0">
                    <h1 style={!isDark ? { color: "#000" } : { color: "#fff" }} className="banner-heading">
                        FINANCES <br /> AND
                        FREEDOM
                    </h1>
                </div>
            </div>
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
            <h4 className="white-banner-text mt-3 text-center">
                Boxes
            </h4>
            <div className="d-flex justify-content-center align-items-center py-3 buttonMtTop">
                <div className="position-relative lets_start_main">
                    <div className="lets_start d-flex"> <img src={circle} alt="" srcset="" /> &nbsp; Let's start</div>
                </div>
            </div>
            <h4 className="white-banner-text mt-3 text-start px-3">
                text
            </h4>
            <div className="advice d-flex pt-3 px-3">
                <img src={!isDark ? icon : darkIcon} alt="icon" />
                <p className={`ps-4 ${!isDark ? "white-banner-text" : "dark-banner-text"}`}>
                    Make Plans, save your income more to <br /> save your life in
                    the future.
                </p>
            </div>
            <div className="position-relative download-box-main mt-3">
                <div className="download-box ">
                    <h2>Download <br /> app now</h2>
                    <img src={baloon} alt="baloon" />
                    <p>14 day trial</p>
                    <div className="apple-icon">
                        <img src={apple} alt="apple-icon" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Mobile
