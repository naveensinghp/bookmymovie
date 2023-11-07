import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Profile from "./components/FramerMotionLearnings/FramerMotionLearnings";
import LoyaltyProgram from "./components/LoyaltyProgram";



function App() {
  return (
    <>
      <Header />
      <div style={{display: 'flex',justifyContent: 'center',marginTop: '10%',width: '100%'}}>
          <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" alt="banner" />
      </div>
      <LoyaltyProgram />
      <NowShowingMovie />
    </>
  );
}



export default App;

