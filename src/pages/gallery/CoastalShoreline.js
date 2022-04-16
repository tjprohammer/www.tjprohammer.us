import { Container, Header, HeaderDescription, Row, Column } from './StylesGallery';
import { ProductState } from '../../components/context/ProductContext';
import SingleProduct from '../../components/product/SingleProduct';
import { Link } from 'react-router-dom';
import { ScrollToTopButton } from '../../components/scrollToTop/ScrollToTop';



const CoastalShoreline = (prod) => {
    const { coastsProducts } = ProductState();

    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
            }}
        >
        
            <Header> Coastal Shoreline </Header>
            <HeaderDescription>Home to the most diverse living species</HeaderDescription>
            <Container>
                <Row>
                    <Column>
                        {coastsProducts.slice(0, 6).map((prod, index) => (
                            <Link to={`/coastalshoreline/${prod.title}`}>
                                <SingleProduct key={coastsProducts.index} prod={prod} src={prod.src} />
                            </Link>
                        ))}
                    </Column>

                    <Column>
                        {coastsProducts.slice(6, 11).map((prod, index) => (
                            <Link to={`/coastalshoreline/${prod.title}`}>
                                <SingleProduct key={coastsProducts.index} prod={prod} />
                            </Link>
                        ))}
                    </Column>
                </Row>
            </Container>
        </div>
    );
};

export default CoastalShoreline;
