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
        </>     
    );
}

export default BookMovieSeat;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 8%;
  padding-right: 8%;
`;
