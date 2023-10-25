import Header from "./components/Header/Header";
import React from 'react';
import RecentMovieSlider from "./components/RecentMovieSlider/RecentMovieSlider";
import NowShowingMovie from "./components/NowShowingMovie/NowShowingMovie";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import Profile from "./components/FramerMotionLearnings/FramerMotionLearnings";
import LoyaltyProgram from "./components/LoyaltyProgram";



// function App(){
//   return (
//     <>
//       <Counter />
//       <footer>
//         <p>Copyrights</p>
//       </footer>
//     </>
//   ); 
// }

// function Counter(){
//  const [count,setCount] = React.useState(0);
//  return(
//     <main>
//       <BigCountNumber count={count} />
//       <button
//         onClick={() => setCount(count + 1)}
//       >Increment</button>

//       <Decoration />
//     </main>
//  );
// }

// function Decoration(){
//   console.log("Decoration Rendered");
//   return (
//     <div style={{position: 'absolute',top: '0',right:'0',fontSize: '4rem'}}>
//       ⛵️
//     </div>
//   );
// }


// function BigCountNumber({ count }){
//   console.log("BigCountNumber");
//   return(
//     <p>
//       <span className="prefix"> Count:</span>
//       {count}
//     </p>
//   );
// }

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
    <div style={{display: 'flex',justifyContent: 'center',marginTop: '10%',width: '100%'}}>
        <img src="https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-Welcome_back__1738.jpg" alt="banner" />
    </div>
    <LoyaltyProgram />
    <NowShowingMovie />
    </>
  );
}



export default App;

