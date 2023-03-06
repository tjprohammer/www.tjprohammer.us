import { AboutRow, ContainerText, ContainerWrap, Image, Title, TitleDescrip } from './StylesAbout';
import { Link } from 'react-router-dom';
import { StyledButton} from '../home/Home';
import TJPortrait from '../../images/WildwoodRecPortraits.avif';
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
        <>
            <AboutRow>
                <ContainerWrap>
                    <Image alt="TJ Prohammer" rounded variants={getVariants('bottom')} initial={'initial'} animate={'animate'} src={TJPortrait}/>
                </ContainerWrap>

                <ContainerText>
                    <Title variants={getVariants('bottom')} initial={'initial'} animate={'animate'}>
                        A Nature Photographer with many talents
                    </Title>
                </ContainerText>
            </AboutRow>
            <Row style={{ marginBottom: '5em', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <TitleDescrip variants={getVariants('bottom')} initial={'initial'} animate={'animate'}>
                    TJ Prohammer was born and raised in New Jersey and his journey to the west began in 2014, the first stop being Colorado. His excitement for the snow always gave him a boost of
                    energy, loving every moment of it. In Colorado, TJ was an Epic Mix Photographer in the winter months and photography grew on him quickly.
                </TitleDescrip>
                <TitleDescrip variants={getVariants('bottom')} initial={'initial'} animate={'animate'}>
                    After living in Colorado, he then went back East to study Information Technology. As he was studying in North Carolina his photography really came to life, filled with creativity.
                    After a year, TJ moved to Portland, OR where his backyard was his playground.
                </TitleDescrip>
                <TitleDescrip style={{ marginTop: '1em' }} variants={getVariants('bottom')} initial={'initial'} animate={'animate'}>
                    The Pacific Northwest was filled with luscious rainforest, high dry deserts, volcanic mountains, and a coastline that was completely different than the East. While living in such a
                    beautiful place, TJ has been on countless road trips with a good buddy, Andy Conner as he was photographer too.
                </TitleDescrip>
                <TitleDescrip variants={getVariants('bottom')} initial={'initial'} animate={'animate'}>
                    TJ has been all over the United States and does not plan to stop anytime soon. He captures the most beautiful, elegant images of nature and loves to share his journeys with his
                    friends and family. Photography for TJ free&rsquo;s his mind off the chaos of society and allows him to expand his creativity.
                </TitleDescrip>

            </Row>
            <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5em'}}>
                <Link to="/gallery">
                    <StyledButton style={{ display: 'flex', justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }}>
                        Check out the Gallery <br></br>Click Me
                    </StyledButton>
                </Link>
                </Row>
        </>
    );
};

export default About;
