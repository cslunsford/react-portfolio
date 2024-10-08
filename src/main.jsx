import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: <Homepage />
            }, {
                path: '/portfolio',
                element: <Portfolio />
            }, {
                path: '/proficiencies',
                element: <Resume />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)