import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';



function LoyaltyProgram() {
  return (
    <Card>
        <TitleText>
            Introducing a loyalty program with special rewards and exclusive benefits!
        </TitleText>
        <ButtonThings>
            <Button>Know More</Button>
            <a  href="#">Already a Memeber</a>
        </ButtonThings>
        <Logo>
          <img src="assets/pvr.png" alt="bookmymovielogo" width={200}/>
        </Logo>
    </Card>
  );
}

export default LoyaltyProgram;


const Card = styled.div`
  padding: 20px 20px 20px 40px;
  margin-top: 30px;
  /* display: flex; */
  justify-content: center;
  width: 75%;
  height: 240px;
  margin-left: 15%;
  border-radius: 12px;
  background-color: var(--color-black-400, yellow);
`;

const TitleText = styled.p`
  font-size: 1.5rem;
  color: var(--color-gray-900);
`;

const ButtonThings = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

const Logo = styled.div`
 width: 100%;
 position: absolute;
 left: 0;
`;