import React from 'react';
import ThreeBrothers from '../../images/Three Brothers.jpg';
import signature from './signatureWhite.png';
import { PageWrapper, Title, TitleDescription, BackgroundImage } from './StyleHome';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Home = (props) => {
    return (
        <PageWrapper>
            <BackgroundImage src={ThreeBrothers} />
            <StyledRow >
                <Title src={signature} />
            </StyledRow>
            <StyledRow >
                <TitleDescription>Nature Photographer</TitleDescription>
            </StyledRow>
            <StyledRow >
                <Col>
                    <Link to="/about">
                        <StyledButton color="secondary" size="md" className="" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                            About
                        </StyledButton>
                    </Link>
                </Col>
                <Col>
                    <Link to="/gallery">
                        <StyledButton color="secondary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                            Gallery
                        </StyledButton>
                    </Link>
                </Col>
            </StyledRow>
        </PageWrapper>
    );
};

export default Home;

export const StyledButton = styled(Button)`
margin: 1em;
justify-content: center;
align-items: center;
background-color: #8888;
letting-spacing: .3em;
font-weight: 500;
color: white;
border-radius: .6em;
    :hover {
        border-radius: 2em;
    }
`;

export const StyledRow = styled(Row)`
margin-left: 0;
`;