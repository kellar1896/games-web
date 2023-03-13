import React from "react";
import NavBar from "../organisms/nav-bar";
import SideBar from "../organisms/side-bar";

type MainDashboardProps = {
  children: React.ReactNode;
};

const MainDashboard = ({ children }: MainDashboardProps) => {
  return (
    <div className="min-h-screen bg-raisingBlack font-mono flex flex-col md:flex-row">
      <SideBar />
      <NavBar />
      <div className="w-full md:w-9/12 min-h-screen">{children}</div>
    </div>
  );
};

export default MainDashboard;
