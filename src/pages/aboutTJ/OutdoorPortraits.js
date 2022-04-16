import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { outDoorPortraits } from '../../components/product/productData';
import styled from 'styled-components';
import { ProductState } from '../../components/context/ProductContext';
import { Header, HeaderDescription } from '../gallery/StylesGallery';
import { StyledButton } from '../home/Home';
import { Link } from 'react-router-dom';

function OutdoorPortraits() {
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
        <div >
            <Header>Outdoor Portraits</Header>
            <HeaderDescription >
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
                    )
                </InnerCarousel>
            </Carousel>

            <div style={{ marginBottom: '4em', display: 'flex', alignItem: 'center', justifyContent: 'center', padding: '3em' }}>
                <Link to="/gallery">
                    <StyledButton
                    style={{ justifyContent: 'center', alignItmes: 'center', letterSpacing: '.11em' }}
                    >
                        Check out the Gallery <br></br>Click Me
                    </StyledButton>
                </Link>
            </div>
        </div>
    );
}
export default OutdoorPortraits;

const Item = styled(motion.div)`
    mix-width: 30px;
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
