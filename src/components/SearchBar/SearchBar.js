import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';


function SearchBar() {
  return<>
   <SearchBox>
      knkn
  </SearchBox>;
  </>
}

export default SearchBar;

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
