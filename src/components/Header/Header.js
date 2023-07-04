import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import {search} from 'react-icons-kit/fa/search'
import {ic_mic_outline} from 'react-icons-kit/md/ic_mic_outline'
import {ic_menu_outline} from 'react-icons-kit/md/ic_menu_outline'
import {iosMoon} from 'react-icons-kit/ionicons/iosMoon'
import {thMenu} from 'react-icons-kit/typicons/thMenu'
import {adjustBrightness} from 'react-icons-kit/typicons/adjustBrightness'

function Header() {
  const[isOpened,setIsOpened] = React.useState(false);
  function toggle(){
    setIsOpened(isOpened => !isOpened)
  }
  return (
    
    <Wrapper>
      <Logo>
        <img src="assets/logo.png" alt="bookmymovielogo" width={200}/>
      </Logo>
      {/* 
      <Icon style={{marginLeft: "1rem", color: 'red'}} size="1.5em" icon={ic_mic_outline} /> */}
      <div style={{width: '50%',display: 'flex',flexDirection: 'row'}}>
      <Icon style={{marginLeft: "1rem", color: 'white'}} size="1.5em" icon={search} />
        <Input 
            id="search-movie"
            type="text"
            placeholder="&#xF002; search movies or theatres"
        />
        <ChooseLocation>
        </ChooseLocation>
      </div>
      <MenuIcon>
        {/* <Icon  size={32} icon={thMenu} /> */}
        {
          isOpened ? 
            <Icon size={42} icon={iosMoon} onClick={toggle} /> 
          : <Icon size={32} icon={adjustBrightness} onClick={toggle} />
        }
      </MenuIcon>
      <Test>
      <Icon style={{color: 'black'}} size="1.5em" icon={search} />
        <input placeholder='type to search' />
      </Test>
    </Wrapper>
  );
}

export default Header;

const Test = styled.div`
  background-color: white;
  width: 40%;
  border-radius: 10px;
  height: 2.5rem;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const Dark = styled.div`
  cursor: pointer;
`;

const MenuIcon = styled.div`
   cursor: pointer;
   color: ${COLORS.blue};
`;


const Logo = styled.div`
  /* margin-top: 10px; */
`;

const Input = styled.input`
    height: 45px;
    outline: 0px;
    border-color: rgb(28 28 28);
    border-radius: 4px;
    border-style: solid;
    width: 100%;
    font-size: 1rem;
    background: ${COLORS.gray[300]};
    color: ${COLORS.white};
`;
const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 20px;
    box-shadow: 0px 2px 5px hsl(0deg 0% 0% / 0.2); 
    background: ${COLORS.gray[600]};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
  width: 350px;
  height: 40px;
  border-radius: 12px;
`;