import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductState } from '../../components/context/ProductContext';
import styled from 'styled-components';
import { StyledButton } from '../home/Home';
import { Row } from 'reactstrap';
import { ProductWrapper, Container, ProductImage, TextContainer, TextWrapper,ProductTitle, ProductDescrp, Textcontainer } from './ProductPageStyles';

const StarProductPage = () => {
    const { stargazingId } = useParams();
    const { starProducts } = ProductState();

    const thisproduct = starProducts.find((prod) => prod.title === stargazingId);
    console.log(thisproduct.title);
    return (
        <Container>
            <ProductWrapper>
                <ProductImage src={thisproduct.src} alt=""></ProductImage>
                <Textcontainer>
                    <TextWrapper>
                        <ProductTitle title={thisproduct.title}>{thisproduct.title}</ProductTitle>
                        <ProductDescrp title={thisproduct.title}>Utah</ProductDescrp>
                        {/* <Row>
                            <StyledButton style={{ marginRight: '2em', marginBottom: '1em' }} title={thisproduct.material}>
                                Material
                            </StyledButton>
                            <StyledButton style={{ marginRight: '2em', marginBottom: '1em' }} title={thisproduct.size}>
                                Size
                            </StyledButton>
                            <ProductDescrp style={{ marginTop: '.5em', fontSize: '1.6em', fontWeight: '600', color: 'green', marginRight: '2em', marginBottom: '1em' }} title={thisproduct.title}>
                                Price
                            </ProductDescrp>
                        </Row> */}
                    </TextWrapper>
                </Textcontainer>
            </ProductWrapper>
        </Container>
    );
};

export default StarProductPage;

