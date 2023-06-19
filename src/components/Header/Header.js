import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'

import {search} from 'react-icons-kit/fa/search'
import {ic_mic_outline} from 'react-icons-kit/md/ic_mic_outline'
import {ic_menu_outline} from 'react-icons-kit/md/ic_menu_outline'
function Header() {
  return (
    <Wrapper>
      <Logo>
        <img src="assets/logo.png" alt="bookmymovielogo" width={200}/>
      </Logo>
      <Icon style={{marginLeft: "1rem", color: 'red'}} size="1.5em" icon={search} />

      <Icon style={{marginLeft: "1rem", color: 'red'}} size="1.5em" icon={ic_mic_outline} />
      <Input 
          id="search-movie"
          type="text"
          placeholder=' Search Movies or Theatres;'
      />
      <ChooseLocation></ChooseLocation>
      <MenuIcon>
        <Icon size="2em" icon={ic_menu_outline} />
      </MenuIcon>
    </Wrapper>
  );
}

export default Header;


const MenuIcon = styled.div`
  color: ${COLORS.blue};
`;


const Logo = styled.div`
  /* margin-top: 10px; */
`;

const Input = styled.input`
    height: 45px;
    border-color: rgb(210, 210, 215);
    border-radius: 4px;
    border-style: solid;
    width: 40%;
    font-size: 1rem;
    background: ${COLORS.gray[300]};
    color: ${COLORS.white};
`;
const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 20px;
    /* box-shadow: 0px 2px 5px hsl(0deg 0% 0% / 0.2);  */
    background: ${COLORS.gray[600]};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 1;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${COLORS.white};
  background: ${COLORS.gray[300]};
  width: 40%;
  height: 40px;
  border-radius: 7px;
`;

const ChooseLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${COLORS.white};
  background: ${COLORS.gray[300]};
  width: 200px;
  height: 40px;
  border-radius: 12px;
`;