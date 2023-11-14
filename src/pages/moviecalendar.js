import Header from "../components/Header/Header";
import TextLink from "../components/TextLink";
import styled from 'styled-components';

function MovieCalendar(){
    return(
        <>
            <Header/>
            <TextLink  href="/">Go Home</TextLink>
            {/* <h1>Movie Calendar Page</h1> */}
            <Wrapper>
                {/* MOVIE BANNER GOESHERS */}
                <MoviePoster>
                    <div style={{background: 'white'}}>
                    Hello World
                    </div>
                </MoviePoster>
            </Wrapper>
        </>
    );
}



export default MovieCalendar;

const MoviePoster = styled.div`
    /* padding-left: 50%;
    padding-right: 50%; */

`

const Wrapper = styled.div`
  padding-top: 20%;
  background: hotpink;
`;