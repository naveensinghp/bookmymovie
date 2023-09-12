import React from 'react';
import styled from 'styled-components';


function Button({
  name
}) {
  return(
    <>
    <Wrapper>
      {name}
    </Wrapper>;
    </>
  );
  
  
}

const Wrapper = styled.button`
  background-color: #FFFFFF;
  color: #1a1a1a;
  font-weight: 700;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  font-size: 1rem;
  letter-spacing: 0.6px;
`;

export default Button;



// function VisuallyHidden({
//   as: Element = 'span',
//   className,
//   children,
//   ...delegated
// }) {
//   return (
//     <Element
//       className={clsx(styles.wrapper, className)}
//       {...delegated}
//     >
//       {children}
//     </Element>
//   );
// }

// export default VisuallyHidden;