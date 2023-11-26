import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import MovieDescription from "./MovieDescription"; // Create MovieDescription component

function App() {
  return (
    <Router>
      <div>
        <h1>Netflix men Jumia</h1>
        <Movies/>
        {/* <Routes>
          <Route exact path="/" element={<Movies/>} />
          <Route path="/movie/:id" element={<MovieDescription/>} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
