import styled from 'styled-components';
import React from 'react';
import Button from '../components/Button';


export default function Test(){
    const [name, setName] = React.useState('');
    const [boxWidth, setBoxWidth] = React.useState(1);
    const id = React.useId();
    const boxes = [
        {flex: boxWidth,background: 'hsl(345deg 100% 50%)'},
        {flex: 3,background: 'hsl(260deg 100% 40%)'},
        {flex: 1,background: 'hsl(50deg 100% 60%)'},
    ];
    return<>
        {/* <Wrapper>
           <section>
            <label htmlFor={`${id}-name`}>
                Name
            </label>
            <input
                id={`${id}-name`}
                type="text"
                value={name}
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
             <label htmlFor={`${id}-box-width`}>
                First box width:
            </label>
            <input
          id={`${id}-box-width`}
            type="range"
            min={1}
            max={5}
            step={0.01}
            value={boxWidth}
            onChange={(event) => {
                setBoxWidth(Number(event.target.value));
            }}
            />
           </section>
           
        </Wrapper> */}
        <SeatNumber>
            <Button variant='fill'>
                1
            </Button>
        </SeatNumber>
    </>
}

const SeatNumber = styled.div`
    margin: 10px auto;
    width: 300px;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    color: black;
    font-weight: bold;
`




