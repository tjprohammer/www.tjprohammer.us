
import { GlassContainer, TitleDescrip } from './StylesAbout';
import { Link } from 'react-router-dom';
import { StyledButton } from '../home/Home';
import { BackgroundImage, PageWrapper } from '../home/StyleHome';
import RedCream from '../../images/RedCream.jpg';
import { Row } from 'reactstrap';

const ANIMATION_DURATION_S = 0.8;

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
            <BackgroundImage style={{ position: 'absolute', backgroundPosition: 'bottom', backgroundAttachment: 'fixed' }} src={RedCream} />
            <GlassContainer>
            
                <TitleDescrip
                style={{marginTop: '1em'}}                   
                variants={getVariants("bottom")}
                        initial={"initial"}
                        animate={"animate"}>
                    TJ Prohammer was born and raised in New Jersey and his journey to the west began in 2014, the first stop being Colorado. His excitement for the snow always gave him a boost of energy, loving every moment of it. In Colorado, TJ was an Epic Mix Photographer in the winter months and photography grew on him quickly.
                </TitleDescrip>
                <br />
                <br />
                <TitleDescrip
                
                variants={getVariants("bottom")}
                        initial={"initial"}
                        animate={"animate"}>
                    After living in Colorado, he then went back East to study Information Technology. As he was studying in North Carolina his photography really came to life, filled with creativity. After a year, TJ moved to Portland, OR where his backyard was his playground.  
                </TitleDescrip>
                <Row style={{ alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column', diplay: 'flex', flexWrap: 'none', marginLeft: '0' }}>
                    <Link to="/readmoretwo">
                        <StyledButton style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }} color="primary">Read More</StyledButton>
                    </Link>
                </Row>
            </GlassContainer>
        </PageWrapper>
    );
};

export default ReadMore;
