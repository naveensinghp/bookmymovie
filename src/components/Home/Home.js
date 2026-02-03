import React from 'react';
import Header from '../Header/Header';
import AnnoucementBanner from '../AnnoucementBanner/AnnoucementBanner';
import LoyaltyProgram from '../LoyaltyProgram';
import NowShowingMovie from '../NowShowingMovie/NowShowingMovie';
import Spacer from '../Spacer/Spacer';

function Home() {
  return <>
       {/* <Header />
       <Spacer size={100} /> */}
      {/* <AnnoucementBanner/> */}
      {/* <LoyaltyProgram /> */}
      <NowShowingMovie />
  </>;
}

export default Home;
