import React, { memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { PageRoute } from "../models/routes";
import { routes } from "./routes.config";


const Router = () => {

    const renderRoute = useCallback((route: PageRoute) => {
        return (
            <Route path={route.path} element={<route.element/>}>
                {route.children?.map((childRoute) => renderRoute(childRoute))}
            </Route>
        )
    }, [])

    return (
        <Routes>
          {routes.map((route)=>
              renderRoute(route)
          )}
        </Routes>
    );
}

export default memo(Router)