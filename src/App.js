import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";



function App() {
  return (
    <>
   <Header />
    {/* <RecentMovieSlider /> */}
    <NowShowingMovie />
    </>
  );
}



export default App;

