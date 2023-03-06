
import styled from 'styled-components';
import { BackgroundImage, PageWrapper } from '../home/StyleHome';
import CalmStorm from '../../images/CalmStorm.avif';
import { Link } from 'react-router-dom';
import { Col} from 'reactstrap';
import { StyledButton } from '../home/Home';

const GalleryCategory = () => {
    return (
        <PageWrapper>
            <BackgroundImage src={CalmStorm} />


                <Container>
                <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/products/coastalshoreline">
                            <StyledButton color="secondary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Coastal Shoreline
                            </StyledButton>
                        </Link>
                    </Col>
                
                    <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/products/drydeserts">
                            <StyledButton color="secondary" size="md" className="" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Dry Deserts
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/outdoorportraits">
                            <StyledButton color="secondary" size="md" className="" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Outdoor Portraits
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/products/stargazing">
                            <StyledButton color="secondary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Stargazing
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/products/thehighalpine">
                            <StyledButton color="secondary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                The High Alpine
                            </StyledButton>
                        </Link>
                    </Col>
                   
                    
                    <Col style={{ padding: '.2em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/products/lushrainforests">
                            <StyledButton color="secondary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Lush Rainforests
                            </StyledButton>
                        </Link>
                    </Col>
                </Container>

        </PageWrapper>
    );
};

export default GalleryCategory;

const Container = styled.div`
    padding: 5em;
    background-color: red;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 3em;
`;
