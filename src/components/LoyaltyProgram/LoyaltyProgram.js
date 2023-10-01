import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';



function LoyaltyProgram() {
  return (
    <Card>
      <div style={{display: 'flex',flexDirection: 'column'}}> 
        <TitleText>
            Introducing a loyalty program with special rewards and exclusive benefits!
        </TitleText>
        <ButtonThings>
            <Button>Know More</Button>
            <a className="alre" href="#">Already a Memeber</a>
        </ButtonThings>
      </div>
    </Card>
  );
}

export default LoyaltyProgram;


const ButtonThings = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 800px;
  height: 240px;
  margin-left: 15%;
  border-radius: 12px;
  background-color: var(--color-black-400, yellow);
`;

const TitleText = styled.div`
  font-size: 1.3rem;
  color: var(--color-gray-900);
`;