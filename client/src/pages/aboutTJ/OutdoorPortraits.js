import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { outDoorPortraits } from '../../components/product/ProductData';
import styled from 'styled-components';
import { ProductState } from '../../components/context/ProductContext';
import { Container, Header, HeaderDescription } from '../gallery/StylesGallery';
import { StyledButton } from '../home/Home';
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';

const OutdoorPortraits = () => {
    const [width, setWidth] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const counter = useRef(0);
    const { portraits } = ProductState(outDoorPortraits);
    const carousel = useRef();

    //Image Load
    const imageLoaded = () => {
        setIsLoading((currentIsLoading) => !currentIsLoading);
        counter.current += 1;
        if (counter.current >= portraits.length) {
            setIsLoading(false);
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    };

    return (
        <Container >
            <Header>Outdoor Portraits</Header>
            <HeaderDescription>
                Click and drag to see
                <br /> TJ and his friends as they travel around the US
            </HeaderDescription>

            <Carousel onLoad={imageLoaded} ref={carousel}>
                <InnerCarousel drag="x" draggable={true} dragConstraints={{ right: 0, left: -width }}>
                    {portraits.map((image) => {
                        return (
                            <Item key={image.id}>
                                <ItemImg key={image.id} src={image.src} alt="" />
                            </Item>
                        );
                    })}
                    
                </InnerCarousel>
            </Carousel>

            <div style={{ marginBottom: '4em', display: 'flex', alignItem: 'center', justifyContent: 'center', padding: '3em' }}>
                <Link to="/gallery">
                    <StyledButton style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }}>
                        Back to Gallery Menu
                    </StyledButton>
                </Link>
            </div>
        </Container>
    );
};

export default OutdoorPortraits;

const Item = styled(motion.div)`
    min-height: 20px;
    padding-right: 1rem;
    padding-left: 1rem;
`;

const ItemImg = styled(motion.img)`
    max-height: 20rem;
    background-size: cover;
    background-position: center;
    pointer-events: none;
    border-radius: 1rem;
`;

const InnerCarousel = styled(motion.div)`
    margin: 5em 0 0 0;
    display: flex;
`;
const Carousel = styled(motion.div)`
    cursor: grab;
    overflow: hidden;
`;
