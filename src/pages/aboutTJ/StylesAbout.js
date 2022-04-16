import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BackgroundColor = styled.div`
    position: absolute;
  
    background-color: #222;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    /* @media screen and (max-width: 401px) {
        min-height: 230%;
    }
    @media screen and (max-width: 968px) {
        min-height: 200%;
 
    } */


`;
export const Wrap = styled.div`
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const HeaderImg = styled.img`
    margin: auto;
    min-width: 50%;
    min-height: 50%;
    background-image: cover;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`;

export const Title = styled(motion.h1)`
text-align: center;
margin-top: 2em;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: center;
    text-shadow: -2px 0 2px rgba(15, 15, 15, 0.8);
    font-size: 2em;
    letter-spacing: 0.5rem;
    color: white;
    margin-bottom: 1em;
`;

export const TitleDescrip = styled(motion.h3)`

    display: flex;
    flex-direction: row;
    font-weight: 300;
    text-transform: none;
    justify-content: center;
    text-align: center;
    color: white;
    text-shadow: -2px 0 2px rgba(15, 15, 15, 0.8);
    font-size: 1.4em;
    letter-spacing: 0.17rem;
    overflow-wrap: break-word;
    
`;

export const GlassContainer = styled.div`
justify-content: center;
align-items: center;
    max-width: 45em;
    position: relative;
    padding-right: 1em;
    padding-left:2em;
    flex-direction: column;
    height: 30em;
    border-radius: .6em;
    backdrop-filter: blur(20px) !important;
    background-color: rgba(200, 200, 200, .30);
    box-shadow: 0 13px 27px -2px hsla(240, 30.1%, 0%, 0.65), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    display: inline-block;
    justify-content: center;
    overflow-y: scroll;
    overflow-wrap: break-word;
    

    @media screen and (max-width: 968px) {
        width: 25em;
 
    }

      /* width */
  ::-webkit-scrollbar {
    width: 10px;
    border-radius: .6em;
    background-color: #4444;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 5px grey; */
    border-radius: .6em;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #8888;
    border-radius: .6em;
  }
    


    /* display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    justify-content: center;
    object-fit: contain;
    width: 70%;
    left: 15%;
    align-items: center;
    position: absolute;
    box-shadow: 0 13px 27px -2px hsla(240, 30.1%, 0%, 0.65), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);

    @media screen and (min-width: 360px) {
        height: 50%;
        top: 25%;
    }
    @media screen and (min-width: 375px) {
        height: 50%;
        top: 25%;
    }
    @media screen and (min-width: 1200px) {
        height: 70%;
        top: 15%;
    } */
`;

export const GlassContainerReadMe = styled(GlassContainer)`
max-width: 50em;
`;