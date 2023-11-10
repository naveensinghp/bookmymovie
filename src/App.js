import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Profile from "./components/FramerMotionLearnings/FramerMotionLearnings";
import LoyaltyProgram from "./components/LoyaltyProgram";
import AnnoucementBanner from "./components/AnnoucementBanner/AnnoucementBanner";



function App() {
  return (
    <>
      <Header />
      <AnnoucementBanner/>
      <LoyaltyProgram />
      <NowShowingMovie />
    </>
  );
}



export default App;

