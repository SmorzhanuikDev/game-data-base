import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Games} from "./Pages/Games/Games";
import {Home} from "./Pages/Home";
import {Developers} from "./Pages/Developers/Developers";
import {Genres} from "./Pages/Genres/Genres";
import {Platforms} from "./Pages/Platforms/Platforms";
import {Profile} from "./Pages/Profile";
import {Provider} from "react-redux";
import store from './redux-store'
import GameDetails from "./Pages/GameDetails/GameDetails";

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
                element: <Developers/>
            },
            {
                path: '/genre/:genreId',
                element: <Genres/>
            },
            {
                path: '/genres',
                element: <Genres/>
            },
            {
                path: '/platforms',
                element: <Platforms/>
            },
            {
                path: '/profile',
                element: <Profile/>
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

