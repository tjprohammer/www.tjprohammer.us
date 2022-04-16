import { useState } from 'react';
import { GlassContainer, TitleDescrip } from './StylesAbout';
import AnimatedText from '../../components/Animation/AnimatedText';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { StyledButton } from '../home/Home';
import { BackgroundImage, PageWrapper } from '../home/StyleHome';
import NestledGrowth from '../../images/NestledGrowth.jpg';
import { Row } from 'reactstrap';

const ANIMATION_DURATION_S = 1;

const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});
const ReadMore = () => {

    return (
        <PageWrapper>
            <BackgroundImage style={{ height: '50%', display: 'flex', position: 'absolute', backgroundPosition: 'bottom' }} src={NestledGrowth} />
            <GlassContainer>
                
                    <TitleDescrip
                    style={{marginTop: '1em'}}  
                    variants={getVariants("bottom")}
                        initial={"initial"}
                        animate={"animate"}>
                        The Pacific Northwest was filled with luscious rainforest, high dry deserts, volcanic mountains, and a coastline that was completely different than the East. While living in such a beautiful place, TJ has been on countless road trips with a good buddy, Andy Conner as he was photographer too.
                    </TitleDescrip>
                    <br />
                    <br />
                    <TitleDescrip
                    variants={getVariants("bottom")}
                        initial={"initial"}
                        animate={"animate"}>
                        TJ has been all over the United States and does not plan to stop anytime soon. He captures the most beautiful, elegant images of nature and loves to share his journeys with his friends and family. Photography for TJ free&rsquo;s his mind off the chaos of society and allows him to expand his creativity.
                    </TitleDescrip>
                    <Row style={{ alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column', diplay: 'flex', flexWrap: 'none', marginLeft: '0' }}>
                    <Link to="/outdoorportraits">
                        <StyledButton 
                        style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }}
                        color="primary">
                            Check Out TJ and his friends
                        </StyledButton>
                    </Link>
                </Row>
            </GlassContainer>
        </PageWrapper>
    );
};

export default ReadMore;
