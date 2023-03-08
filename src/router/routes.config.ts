import { PageRoute } from "../models/routes";
import Games from "../pages/games";
import Users from "../pages/users";

export const routes = [
    {
        id:'users',
        path: '/users',
        element: Users,
        // children:[
        //     {
        //         path: '/:id',
        //         element: Users,
        //     }
        // ]
    },
    {
        id:'games',
        path: '/',
        element: Games,
        // children:[
        //     {
        //         path: '/:id',
        //         element: Games,
        //     } 
        // ]
    }
] as PageRoute[];