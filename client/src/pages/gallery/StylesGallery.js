import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledButton } from '../home/Home';



export const Header = styled.div`
    text-align: center;
    font-size: 6em;
    letter-spacing: 0.5rem;
    color: white;
    @media screen and (max-width: 1285px) {
        font-size: 3.2em;
        margin-top: 20px;

    }
    /* @media screen and (max-width: 580px) {
        margin-bottom: 3.2em;
    } */
`;
export const HeaderDescription = styled.div`
    font-size: 3em;
    width: 100%;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: initial;
    color: #888;
    @media screen and (max-width: 1285px) {
        font-size: 1.8em;
        margin-top: 20px;
        width: 100%;
    }
`;
export const Container = styled.div`
    margin-top: 10em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 10em;
    justify-content: center;

    @media screen and (max-width: 1285px) {
        margin-top: 8em;
    }
    
`;
export const Row = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    
`;

export const Column = styled.div`
    flex: 25%;
    height: auto;
    max-width: 45%;
    padding: 0 12px;
    @media screen and (max-width: 800px) {
        flex: 50%;
        max-width: 50%;
    }
    @media screen and (max-width: 600px) {
        flex: 100%;
        max-width: 100%;
    }
`;

export const ColumnImg = styled(motion.img)`
    margin-top: 16px;
    vertical-align: middle;
    width: 100%;
    height: auto;
    cursor: pointer;
`;

export const Title = styled.div`
    height: 120px;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: #888;
`;
