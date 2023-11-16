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
                <img src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00025768.jpg" alt="banner" />
                <MoviePoster>
                    <Showstuff>
                    Hello World
                    </Showstuff>
                </MoviePoster>
            </Wrapper>
        </>
    );
}



export default MovieCalendar;

const MoviePoster = styled.div`
`

const Wrapper = styled.div`
  padding-top: 1%;
  background: hotpink;
  margin-left: 5%;
  margin-right: 5%;
`;

const Showstuff = styled.div`
    padding: 20px;
    font-size: 1rem;
    color: var(--color-white);
    background: var(--color-black-500);

`;