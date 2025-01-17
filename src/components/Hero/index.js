import React, { useEffect, useState, useCallback } from 'react';
import {
    Container,
    Title,
    FeaturedVertical,
    FeaturedHorizontal,
    Description,
    Info,
    Year,
    Seasons,
    Points
} from './styles';

const url = "https://api.aniapi.com/v1/random/anime/50";


const Hero = () => {

    const [anime, setAnime] = useState([]);

    const fetchAnimes = useCallback(async () => {
        try {
            const response = await fetch(`${url}`);
            const dataAnime = await response.json();
            const { data } = dataAnime;

            if (data) {
                data.map((item) => {
                    const { anilist_id, banner_image, titles, cover_image, score, descriptions, season_period, season_year } = item;
                    if (banner_image && descriptions.en) {
                        setAnime([
                            {
                                id: anilist_id,
                                titles: titles,
                                image: banner_image,
                                cover: cover_image,
                                score: score,
                                descriptions: descriptions,
                                seasons: season_period,
                                year: season_year,
                            }]
                        );
                        return;
                    }
                })
            }

        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchAnimes();
    }, [fetchAnimes]);

    return (
        <>
            {
                anime.map((item) => {
                    return (
                        <Container style={{ backgroundImage: `url(${item.image})` }}>
                            <FeaturedVertical>
                                <FeaturedHorizontal>
                                    <Title>{item.titles.en}</Title>
                                    <Description>{item.descriptions.en}</Description>
                                    <Info>
                                        <Points>{item.score} Pontos</Points>
                                        <Year>{item.year}</Year>
                                        <Seasons>{item.seasons} Temporadas</Seasons>
                                    </Info>
                                </FeaturedHorizontal>
                            </FeaturedVertical>
                        </Container>
                    )
                })
            }
        </>
    )
}

export default Hero;