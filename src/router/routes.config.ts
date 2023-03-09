import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { PageRoute } from "../models/routes";
import Games from "../pages/games";
import Users from "../pages/users";

export const routes = [
    {
        id:'users',
        name: 'Users',
        path: '/users',
        element: Users,
        icon: solid('user'),
        // children:[
        //     {
        //         path: '/:id',
        //         element: Users,
        //     }
        // ]
    },
    {
        id:'games',
        name: 'Games',
        path: '/',
        element: Games,
        icon: solid('gamepad'),
        // children:[
        //     {
        //         path: '/:id',
        //         element: Games,
        //     } 
        // ]
    }
] as PageRoute[];