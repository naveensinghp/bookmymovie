import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';



function LoyaltyProgram() {
  return (
    // <Card>
    //     <TitleText>
    //         Introducing a loyalty program with special <br/>rewards and exclusive benefits!
    //     </TitleText>
    //     <ButtonThings>
    //         <Button>Know More</Button>
    //         <a  href="/home">Already a Memeber</a>
    //     </ButtonThings>
    //     <Logo>
    //       <img src="assets/pvr.png" alt="bookmymovielogo" width={200}/>
    //     </Logo>
    // </Card>
    <div style={{display: 'flex',justifyContent:'center'}}>
      <div 
        style={{backgroundColor: 'hotpink',width: '75%',height: '240px',borderRadius: '12px',padding: '20px 20px 20px 20px',marginTop: '30px'}}>
          {/* first part */}
          <div style={{display: 'flex',justifyContent: 'space-between',backgroundColor: 'red'}}>
            <TitleText>
                Introducing a loyalty program with special <br/>
                rewards and exclusive benefits!
            </TitleText>
              <div>
                <img src="assets/pvr.png" alt="bookmymovielogo" width={250}/>
              </div>
          </div>
          <div style={{display: 'flex',gap: '20px'}}>
              <Button>Know More</Button>
              <a  href="/home">Already a Memeber</a>
          </div>
      </div>
    </div>
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
  font-size: 1.7rem;
  font-weight: bolder;
  color: var(--color-gray-900);
`;

const ButtonThings = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
`;

const Logo = styled.div`
 /* width: 100%; */
 position: absolute;
 left: 0;
 right: 0;
`;