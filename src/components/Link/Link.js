import React from 'react';
import styled from 'styled-components';

const Link = ({ href, ...delegated }) => {
  return <Atag  href={href} {...delegated} />
}

export default Link;

const Atag = styled.a`
  text-decoration: none;
`