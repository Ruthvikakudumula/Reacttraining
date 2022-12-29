import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppRoutes from './routes';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from './components/Movies';
import NewMovies from './components/NewMovies';
import Main from './components/main';




const root = ReactDOM.createRoot(document.getElementById('root'));
const roots = createBrowserRouter([{
  path: '/',
  element: <Main />,
  children: [
    {
      path: "movies",
      element: <Movies />,
    },
    {
      path: "newmovies",
      element: <NewMovies />,
    },
    
  ]
},
 
])
root.render(
  <React.StrictMode>
    <RouterProvider router={roots} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();