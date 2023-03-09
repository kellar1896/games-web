import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../router/routes.config";
import "./nav-bar.css";
import "../App.css";
const NavBar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = useCallback(() => setSidebar(!sidebar), [sidebar]);
  return (
    <header className="md:hidden">
      <div
        className={`${
          sidebar ? "bg-raisingBlack" : "bg-redCrayola"
        } navbar transition-colors duration-700 flex justify-start items-center`}
      >
        <button className="menu-bars" onClick={showSidebar}>
          <FontAwesomeIcon
            icon={solid("bars")}
            className="text-lavanderBlush"
          />
        </button>
      </div>
      <nav
        className={`${
          sidebar ? "active " : ""
        } bg-redCrayola z-10 rounded-r-lg nav-menu p-5`}
      >
        <div className="flex flex-col" onClick={showSidebar}>
          <button className="menu-bars self-end">
            <FontAwesomeIcon
              icon={solid("xmark")}
              className="text-lavanderBlush"
            />
          </button>

          <div className="flex flex-col items-center">
            <div className="rounded-full bg-lavanderBlush h-20 w-20"></div>
            <h3 className="mt-3 font-semibold text-lavanderBlush">
              Admin Name
            </h3>
          </div>
          <ul className="w-full border-t border-lavanderBlush mt-5">
            {routes.map((route, index) => {
              return (
                <li key={index} className="text-xl text-lavanderBlush border-b border-lavanderBlush py-2 focus:border-raisingBlack">
                  <Link to={route.path}>
                    <FontAwesomeIcon icon={route.icon} className="w-3/12" />
                    <span>{route.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default memo(NavBar);
