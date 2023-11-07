import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';



function LoyaltyProgram() {
  return (
    <Wrapper>
      <WrapperTwo>
          <CardOuter>
          <TitleText>
                Introducing a loyalty program with special <br/>
                rewards and exclusive benefits!
            </TitleText>
            <img src="assets/pvr.png" alt="bookmymovielogo" width={250}/>
          </CardOuter>
          <ButtonThings>
              {/* <Button>Know More</Button> */}
              
              <a  href="/home">Already a Memeber</a>
          </ButtonThings>
      </WrapperTwo>
    </Wrapper>
  );
}

export default LoyaltyProgram;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;


const WrapperTwo = styled.div`
 background-color: var(--color-black-400);
 width: 75%;
 height: 240px;
 border-radius: 12px;
 padding: 20px 20px 200px 20px;
 margin-top: 30px;
`;


const CardOuter = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;


const TitleText = styled.p`
  font-size: 1.7rem;
  font-weight: bolder;
  color: var(--color-gray-900);
`;

const ButtonThings = styled.div`
  /* display: flex;
  gap: 20px; */
`;
