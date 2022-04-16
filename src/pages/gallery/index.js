
import styled from 'styled-components';
import { BackgroundImage, PageWrapper } from '../home/StyleHome';
import { Row } from 'reactstrap';
import CalmStorm from '../../images/CalmStorm.jpg';
import { Link } from 'react-router-dom';
import { Col} from 'reactstrap';
import { StyledButton } from '../home/Home';

const GalleryCategory = () => {
    return (
        <PageWrapper>
            <BackgroundImage src={CalmStorm} />

            <Row style={{ display: 'flex', position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '0' }}>
                <Container>
                    <Col style={{ padding: '.5em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/drydeserts">
                            <StyledButton color="primary" size="md" className="" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Dry Deserts
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.5em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/thehighalpine">
                            <StyledButton color="primary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                The High Alpine
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.5em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/stargazing">
                            <StyledButton color="primary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Stargazing
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.5em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/coastalshoreline">
                            <StyledButton color="primary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Coastal Shoreline
                            </StyledButton>
                        </Link>
                    </Col>
                    <Col style={{ padding: '.5em', textAlign: 'center', maxWidth: '20rem' }}>
                        <Link to="/lushrainforests">
                            <StyledButton color="primary" size="md" style={{ position: 'relative', letterSpacing: '0.2rem' }}>
                                Lush Rainforests
                            </StyledButton>
                        </Link>
                    </Col>
                </Container>
                
            </Row>
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
