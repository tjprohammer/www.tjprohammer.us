import React from 'react';
import ThreeBrothers from '../../images/Three Brothers.avif';
import signature from './signatureWhite.png';
import { PageWrapper, Title, TitleDescription, BackgroundImage } from './StyleHome';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Home = (props) => {
    return (
        <PageWrapper>
            <BackgroundImage src={ThreeBrothers} alt="backgroundimage" />
            <StyledRow>
                <Title src={signature} alt="signature" />
            </StyledRow>
            <StyledRow>
                <TitleDescription>Nature Photographer</TitleDescription>
            </StyledRow>
            <StyledRow>
                <Col>
                    <Link to="/about">
                        <StyledButton 
                            
                            color="secondary" size="md" 
                            style={{ position: 'relative', 
                            letterSpacing: '0.2rem' }}>
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
    letting-spacing: 0.1em;
    font-weight: 600;
    color: white;
    border-radius: 0.6em;
    transition: all 0.6s ease;
    box-shadow: 2px 2px 4px #000;
    :hover {
        border-radius: 2em;
        text-shadow: 2px 2px 10px #000000;
        box-shadow: 2px 2px 4px #000000;
    }
`;

export const StyledRow = styled(Row)`
    margin-left: 0;
`;
