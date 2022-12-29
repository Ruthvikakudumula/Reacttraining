import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Movies from "./components/Movies";
import NewMovies from "./components/NewMovies";





const AppRoutes = () => {
  return (
    <Router>

      <Routes>
        <Route path="/Movies" element={<Movies />} />
        <Route path="/NewMovies" element={<NewMovies />} />
       

      </Routes>
    </Router>
  );
};
export default AppRoutes;
