import React from "react";
import { Outlet, Link } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div>
      <h1 className="text-center my-2 text-[2rem]">PAge About</h1>
      <ul className="w-[20%] flex justify-evenly">
        <Link to="Vission">Vission</Link>
        <Link to="Mission">Mission</Link>
        <Link to="Goal">Goal</Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
