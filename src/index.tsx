import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Games} from "./Pages/Games/Games";
import {Home} from "./Pages/Home";
import {Auth} from "./Pages/Authorization/Auth";
import {Provider} from "react-redux";
import store from './redux-store'
import GameDetails from "./Pages/GameDetails/GameDetails";
import {CommonPage} from "./Pages/CommonPage/CommonPage";
import Account from "./Pages/Account/Account";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/games',
                element: <Games/>
            },
            {
                path: '/game/:gameId',
                element: <GameDetails/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/developers',
                element: <CommonPage/>
            },
            {
                path: '/platforms',
                element: <CommonPage/>
            },
            {
                path: '/auth',
                element: <Auth/>
            },
            {
                path: '/profile',
                element: <Account/>
            },
            {
                path: '/genres',
                element: <CommonPage/>
            },

        ]
    }
])

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

