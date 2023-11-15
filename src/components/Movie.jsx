import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MovieContainer = styled.div`
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`

const Img = styled.img`
    max-width: 100%;
`

const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`

const H4 = styled.h4`
    margin: 0;
`

const Span = styled.span`
    margin-left: 3px;
`
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
    const navigate = useNavigate();

    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state: props,
        });
    };

    return (
        <MovieContainer onClick={onClickMovieItem}>
            <Img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
            <MovieInfo>
            <H4>{props.title}</H4>
            <Span>{props.vote_average}</Span>
            </MovieInfo>
        </MovieContainer>
        );
}