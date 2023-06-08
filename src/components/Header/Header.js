import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import SearchBar from '../SearchBar/SearchBar';



function Header() {
  return (
    <Wrapper>
      <img src="assets/logo.png" alt="bookmymovielogo" width={200}/>
      {/* <SearchBar /> */}
      <SearchBox></SearchBox>
      <ChooseLocation></ChooseLocation>
    </Wrapper>
  );
}

export default Header;


const Wrapper = styled.div`
    position: sticky;
    top: 0;
    padding: 20px;
    box-shadow: 0px 2px 5px hsl(0deg 0% 0% / 0.2); 
    background: ${COLORS.gray[600]};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid #dddddd;
    z-index: 1;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${COLORS.white};
  background: ${COLORS.gray[300]};
  width: 350px;
  height: 40px;
  border-radius: 12px;
`;

const ChooseLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${COLORS.white};
  background: ${COLORS.gray[300]};
  width: 300px;
  height: 40px;
  border-radius: 12px;
`;