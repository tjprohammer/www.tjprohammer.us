import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled.div`
    margin-top: 100px;
    font-size: 4rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    color: #888;
    /* @media screen and (max-width: 580px) {
        margin-bottom: 5rem;
    } */
`;
export const HeaderDescription = styled.div`
    font-size: 1.5rem;
    width: 100%;
    margin-bottom: 2em;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: initial;
    color: #888;
`;
export const Container = styled.div`
    width: 80%;
    margin-bottom: 20em;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    justify-content: center;
    align-content: center;
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
