import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Profile from "./components/FramerMotionLearnings/FramerMotionLearnings";




function App({person='Naveen',alt="singh",size =550}) {
  return (
    <>
    {/* <div style={{backgroundColor: 'hotpink',height: '100%'}}>
      <Profile 
        person={person}
        alt={alt}
        size={size}
      />
     
    </div> */}
    <Header />
    <div style={{display: 'flex',justifyContent: 'center',marginTop: '10%'}}>
        <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" alt="banner" />
    </div>
    <NowShowingMovie />
    </>
  );
}



export default App;

