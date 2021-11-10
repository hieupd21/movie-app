import React from "react";
import { Link } from "react-router-dom";
import { OutLineButton } from "../components/Button/Button";
import Slide from "../components/Slide/Slide";

const Home = () => {
  return (
    <>
      <Slide />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutLineButton className="small">Viewmore</OutLineButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
