import React from 'react';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import MovieCalendar from "./pages/moviecalendar";
import FramerMotionLearnings from './components/FramerMotionLearnings/FramerMotionLearnings';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/moviecalendar" element={<MovieCalendar />} />
          <Route exact path="/fm" element={<FramerMotionLearnings />} />
        </Routes>
      </Router>
    </>
  );
}



export default App;

