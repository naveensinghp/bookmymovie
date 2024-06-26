import React from 'react';
import { animated, useSpring } from 'react-spring';
// Learned this boop from the website of https://www.joshwcomeau.com/react/boop/
function useBoop ({ 
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
      tension: 300,
      friction: 10,
  }, 

})  {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return [style, trigger];
  // return (
  //   <animated.span onMouseEnter={trigger} style={style}>
  //     {children}
  //   </animated.span>
  // );
};


export default useBoop;