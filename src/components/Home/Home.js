import React from 'react';
import Header from '../Header/Header';
import AnnoucementBanner from '../AnnoucementBanner/AnnoucementBanner';
import LoyaltyProgram from '../LoyaltyProgram';
import NowShowingMovie from '../NowShowingMovie/NowShowingMovie';

function Home() {
  return <>
       <Header />
      <AnnoucementBanner/>
      <LoyaltyProgram />
      <NowShowingMovie />
  </>;
}

export default Home;
