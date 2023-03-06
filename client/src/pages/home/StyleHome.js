import styled from 'styled-components';
import DeviceSize from '../../components/responsive';
//import signature from '../../images';
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    position: fixed;
    flex-direction: column;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    align-items: center;
    justify-content: center;
`;
export const BackgroundImage = styled.img`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    position: absolute;
    background-size: cover;
    background-position: bottom;

    ${DeviceSize.mobile`
  position: absolute;
  background-position: center;
  `}
`;

export const Title = styled.img`
    background-repeat: no-repeat;
    display: flex;
    position: relative;
    width: 25em;
    height: 12em;
    text-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
`;

export const TitleDescription = styled.p`
    position: relative;

    justify-content: center;
    color: white;
    align-items: center;
    width: 100%;
    display: flex;
    text-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    letter-spacing: 0.15rem;
    font-size: 1.3rem;
`;
export const TextBtnLeft = styled(motion.button)`
    cursor: pointer;

    position: absolute;
    justify-content: center;
    background: transparent;
    border-radius: 50px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.25em 1em;
    align-items: center;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    letter-spacing: 0.1rem;
    font-weight: italic;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
`;
export const TextBtnRight = styled(motion.button)`
    cursor: pointer;
    position: absolute;
    justify-content: center;
    background: transparent;
    border-radius: 50px;
    border: 2px solid white;
    color: white;
    margin: 0 1em;
    padding: 0.9rem;
    align-items: center;
    height: 4rem;
    width: 7rem;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    font-weight: italic;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
`;
export const TextWrapper = styled.div`
    height: 70%;
    width: 50%;
    top: 15%;
    bottom: 30%;
    right: 25%;
    left: 25%;
    margin: 1em;
    position: fixed;
    border: 2px solid white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
