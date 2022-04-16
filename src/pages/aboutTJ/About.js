import { useState } from 'react';
import { GlassContainer, Title, TitleDescrip } from './StylesAbout';
import AnimatedText from '../../components/Animation/AnimatedText';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StyledButton, StyledRow } from '../home/Home';
import { BackgroundImage, PageWrapper } from '../home/StyleHome';
import TJRubyShootingPort from '../../images/TJRubyShootingPort.jpg';
import { Row } from 'reactstrap';

const ANIMATION_DURATION_S = 0.8;

const getVariants = (direction) => ({
    initial: {
        y: direction === 'top' ? '-100%' : '100%',
        opacity: 0,
        transition: { duration: ANIMATION_DURATION_S, ease: 'easeInOut' }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: ANIMATION_DURATION_S, ease: 'easeInOut' }
    }
});

const About = () => {
    return (
        <PageWrapper>
            <BackgroundImage style={{ position: 'absolute', backgroundPosition: 'center' }} src={TJRubyShootingPort} />
            <GlassContainer>
                <AnimatePresence>
                    <Title variants={getVariants('top')} initial={'initial'} animate={'animate'}>
                        TJ Prohammer
                    </Title>
                    <TitleDescrip variants={getVariants('top')} initial={'initial'} animate={'animate'}>
                        Nature Photographer
                    </TitleDescrip>
                    <StyledRow style={{ alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column', diplay: 'flex', flexWrap: 'none' }}>
                        <Link to="/readmore">
                            <StyledButton color="primary" style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }}>
                                Read More
                            </StyledButton>
                        </Link>
                        <Link to="/outdoorportraits">
                            <StyledButton style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }} color="primary">
                                Outdoor Gallery
                            </StyledButton>
                        </Link>
                    </StyledRow>
                </AnimatePresence>
            </GlassContainer>
        </PageWrapper>
    );
};

export default About;
