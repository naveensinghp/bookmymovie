import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Link from '../Link';


const TextLink = ({ href, ...delegated }) => {
  return <Wrapper>
      <Link href={href} {...delegated} />;
  </Wrapper>
}

export default TextLink;

const Wrapper = styled.div`
  cursor: pointer;
`;