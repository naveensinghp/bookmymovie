import React from 'react';

// function Spacer() {
//   return <div></div>;
// }

const Spacer = ({
  size,
  axis,
  style = {},
  ...delegated
}) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;

  return(
    <span
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style
      }}
    >
      {...delegated}
    </span>
  );
}

export default Spacer;
