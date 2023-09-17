import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';




function App() {
  return (
    <>
    <Header />
    <AwesomeSlider>
      <div><img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" /></div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AwesomeSlider>
    <NowShowingMovie />
    </>
  );
}



export default App;

