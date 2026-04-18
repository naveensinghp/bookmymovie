import styled from 'styled-components';
import React from 'react';



 function Test(){
  const [count,setCount] = React.useState(0);
  return(
    <>
      <h1>Hello World</h1>
      <p>
        You've clicked {count} times.
      </p>
      <button
        onClick={() => {
          setCount(count + 1);

          console.log(count)
        }}
      >
        Click me!
      </button>
    </>
  );
}



export default Test;





