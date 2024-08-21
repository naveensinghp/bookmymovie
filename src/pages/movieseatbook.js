import Header from "../components/Header/Header";
import MovieSeatBook from "../components/MovieSeatBook/MovieSeatBook";
import styled from 'styled-components';

function BookMovieSeat(){
    return(
        <>
            <Header />
            <Wrapper>
                <MovieSeatBook />
            </Wrapper>
            {/* <GridWrapper>
                <Headers>My Website</Headers>
                <Main>Content Goes Here</Main>
                <Footer>Footer Goes Here</Footer>
            </GridWrapper> */}
        </>     
    );
}

export default BookMovieSeat;


const Headers = styled.header`
    border: 1px solid;
`;

const Main = styled.div`
    background: peachpuff;
`

const Footer = styled.div`
    background: palevioletred;
`

const GridWrapper = styled.div`
    display: grid;
    color: white;
    grid-template-rows: 64px 1fr 100px;
    min-height: 100%;

`;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
`;
