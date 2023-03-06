import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Row } from 'reactstrap';

export const ContainerWrap = styled.div`
    width: 50%;
    align-items: flex-start;
    justify-content: flex-end;
    display: flex;
    /* @media screen and (max-width: 1285px) {
        align-self: flex-start;
        width: 62.5%;
    } */
    @media screen and (max-width: 1285px) {
        align-self: normal;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const Image = styled(motion.img)`
    display: block;
    width: 50%;
    height: auto;
    margin-right: 12.5%;
    object-fit: contain;

    @media screen and (max-width: 1285px) {
        align-items: center;
        justify-content: center;
        margin-right: 0;
    }
`;

export const ContainerText = styled.div`
    align-self: center;
    margin-top: 20px;
    display: flex;
    width: 50%;
    @media screen and (max-width: 968px) {
        width: 50%;
        margin-right: 0;
    }
`;

export const Title = styled(motion.h1)`
    text-align: left;
    font-size: 3vw;
    letter-spacing: 0.5rem;
    color: white;
    width: 62.5%;
    @media screen and (max-width: 1285px) {
        font-size: 4vw;
        margin-top: 20px;
        width: 100%;
    }
`;

export const TitleDescrip = styled(motion.h3)`
    display: flex;
    font-weight: 300;
    text-transform: none;
    color: white;
    text-align: left;
    font-size: 1.4vw;
    letter-spacing: 0.15rem;
    color: white;
    width: 60%;
    margin-top: 50px;
    @media screen and (max-width: 1285px) {
        font-size: 3vw;
        margin-top: 20px;
        width: 100%;
        padding: 0 4em 0 4em;
    }
`;

export const AboutRow = styled.div`
    margin-top: 15em;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1285px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        margin-top: 7em;
    }
    @media screen and (max-width: 990px) {
        margin-top: 10em;
    }
`;
