import React from 'react';
import styled from 'styled-components';
import { COLORS,LOGO } from '../../constants';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import {search} from 'react-icons-kit/fa/search'
import {ic_mic_outline} from 'react-icons-kit/md/ic_mic_outline'
import {ic_menu_outline} from 'react-icons-kit/md/ic_menu_outline'
import {iosMoon} from 'react-icons-kit/ionicons/iosMoon'
import {thMenu} from 'react-icons-kit/typicons/thMenu'
import {adjustBrightness} from 'react-icons-kit/typicons/adjustBrightness'
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown'
import {locationArrow} from 'react-icons-kit/typicons/locationArrow'
import SubmenuLeft from '../SubmenuLeft/SubmenuLeft';
import SubmenuRight from '../SubmenuRight/SubmenuRight';
import {
  Sun,
  Moon,
  Menu
} from 'react-feather';

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
      <SearchSection>
        <div style={{'display': 'flex','gap': '20px','width': '100%','paddingLeft': '100px'}}>
        <SearchMovies>
           <Icon style={{color: 'white'}} size="0.9em" icon={search} />
           <Input 
                id=" search-movie"
                type="text"
                placeholder="Search movies or theatres"
            />
          <Icon style={{color: 'white',cursor: 'pointer'}} size="1.4em" icon={ic_mic_outline} />
        </SearchMovies>
         <Select
        label="sort"
        value="test">
          <option value="newst">Coimbatore</option>
          <option value="game">Bangalore</option>
          <option value="cutest">Chennai</option>
        </Select>
        </div>
        <div style={{'width': '100%','display': 'flex'}}>
          <SubmenuLeft />
          {/* <SubmenuRight /> */}
        </div>
        {/* <div style={{width: '100%'}}>
          <Select
        label="sort"
        value="test">
          <option value="newst">Newest Release</option>
          <option value="game">Game Settings</option>
          <option value="cutest">Cuted Person</option>
        </Select>
        </div> */}
        {/* <SubmenuLeft /> */}
      </SearchSection>

        <MenuIcon>
        <div className="darkmode" style={{'cursor': 'pointer'}}>
        { isOpened ? 
            <Sun style={{color: 'white'}} size={26} onClick={toggle} />
            // <Icon style={{color: 'white'}} size={42} icon={iosMoon} onClick={toggle} /> 
          : <Moon style={{color: 'white'}} size={26} icon={adjustBrightness} onClick={toggle} />
        }
        </div>
          <SideMenu>
            <Menu size={26}  />
          </SideMenu>
        </MenuIcon>
    </Wrapper>
  );
}

export default Header;

const SideMenu = styled.div`
  //color: hsl(197.55deg 76.42% 51.76%);
  &:hover {
    color: ${COLORS.white};
    filter: blur(14px);
    transform: rotateZ(-45deg) translateX(-50%);
    transition: .2s ease-in;
  }
`;
const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    padding: 20px;
    box-shadow: 0px 2px 5px hsl(0deg 0% 0% / 0.2); 
    background: ${COLORS.gray[600]};
    display: flex;
    /* gap: 150px; */
    justify-content: space-between;
    /* align-items: flex-start; */
`;

const Logo = styled.div`
  /* margin-top: 10px; */
  cursor: pointer;
`;

const SearchSection = styled.div`
  /* background: hotpink; */
  width: 70%;
  display: flex;
   flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const EndMenu = styled.div``;




const SubMenuTwo = styled.ul`
  list-style-type: none;
  color: white;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  gap: 20px;
  cursor: pointer;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  &:hover {
    color: ${COLORS.blue};
  }
`;
const SubMenu = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 14px;
  gap: 20px;
  /* background: yellow; */
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Select = styled.select`
    background: ${COLORS.gray[300]};
    width: 27%;
    padding: 0 15px;
    color: white;
    border-color: ${COLORS.gray[300]};
    font-size: 14px;
    border-radius: 8px;
    color: ${COLORS.white};
    height: 2.5rem;
`;
const SearchMovies = styled.div`
  background: ${COLORS.gray[300]};
  width: 100%;
  border-radius: 5px;
  height: 2.5rem;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;



const MenuIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: baseline;
   cursor: pointer;
   color: ${COLORS.blue};
   gap: 37px;
`;




const Input = styled.input`
    outline: 0px;
    border-color: rgb(28 28 28);
    width: 100%;
    font-size: 1rem;
    background: ${COLORS.gray[300]};
    color: ${COLORS.white};
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
  align-items: center;
  color: ${COLORS.white};
  background: ${COLORS.gray[300]};
  width: 300px;
  height: 40px;
  border-radius: 7px;
  padding: 0 15px;
  
`;
