import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';


const TextLink = ({ href, ...delegated }) => {
  return <Wrapper>
      <Button href={href} {...delegated} />
  </Wrapper>;
}

export default TextLink;

const Wrapper = styled.div`
  cursor: pointer;
`;