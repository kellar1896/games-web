import react, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { routes } from "../router/routes.config";

const SideBar = () => {
  return (
    <div className="min-h-screen w-3/12 hidden bg-redCrayola shadow-lg shadow-black md:flex md:flex-col items-center py-20">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-lavanderBlush h-32 w-32"></div>
        <h3 className="mt-3 font-semibold text-lavanderBlush">Admin Name</h3>
      </div>
      <ul className="w-2/3 mt-10 text-lavanderBlush font-mono space-y-3 text-3xl border-t border-lavanderBlush">
        {routes.map((route, index) => {
          return (
            <li
              key={index}
              className="hover:text-raisingBlack transition-all duration-500 border-b border-lavanderBlush space-x-2 py-5"
            >
              <Link to={route.path}>
                <FontAwesomeIcon icon={route.icon} className="w-2/12" />
                <span>{route.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(SideBar);
