import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import Banner from "../components/Banner";
import Mobile from "../components/Mobile";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <React.Fragment>
      <div className={!isDark ? 'main' : "dark-main"}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <div className="d-none d-lg-block d-sm-none"><Banner isDark={isDark} setIsDark={setIsDark} /></div>
        <div className="d-block d-lg-none d-sm-block">  <Mobile /></div>
      </div>
    </React.Fragment>
  );
};
