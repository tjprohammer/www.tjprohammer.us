import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Wrapper >
            {/* <HeaderDescription style={{ marginTop: '2em' }}>{product.title}</HeaderDescription> */}
            <GalleryImg
            
                layout="row"
                photos={product}
                src={product.image}
                product={product}
                onClick={() => navigate(`/products/${product._id}`)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            />
        </Wrapper>
    );
};

export const GalleryImg = styled(motion.img)`
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 0 10px 0 10px;
    width: 100%;
    object-fit: cover;
    object-position: inherit%;
    height: 300px;
    cursor: pointer;
    /* &:hover {
        height: auto;
    } */
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1rem;
    flex: 1 1 0%;
    @media screen and (max-width: 991px) {
        justify-content: center;
        gap: 0;
        padding: 0 0px 0 0px;
        margin: 0 20px 0 20px;
    }
`;

export default ProductCard;
