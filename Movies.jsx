import React from 'react'
import Movie from '../components/Movie';
import { dummy } from "../movieDummy";
import styled from 'styled-components';

const MoviesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default function Movies() {

  return (
    <div>
      <MoviesContainer>
        {dummy.results.map((item) => {
          return (
            <Movie
              
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </MoviesContainer>
    </div>
  )
}