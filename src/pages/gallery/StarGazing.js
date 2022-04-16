import { Container, Header, HeaderDescription, Row, Column } from './StylesGallery';
import { ProductState } from '../../components/context/ProductContext';
import SingleProduct from '../../components/product/SingleProduct';
import { Link } from 'react-router-dom';

function StarGazing() {
    const { starProducts } = ProductState();
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                marginBottom: '2em'
            }}
        >
            <Header> Stargazing </Header>
            <HeaderDescription>Under the night sky</HeaderDescription>
            <Container>
                <Row>
                    <Column>
                        {starProducts.slice(0, 6).map((prod) => (
                            <Link to={`/stargazing/${prod.title}`}>
                                <SingleProduct key={starProducts.title} prod={prod} src={prod.src} />
                            </Link>
                        ))}
                    </Column>
                    <Column>
                        {starProducts.slice(6, 12).map((prod) => (
                            <Link to={`/stargazing/${prod.title}`}>
                                <SingleProduct key={starProducts.title} prod={prod} />
                            </Link>
                        ))}
                    </Column>
                </Row>
            </Container>
        </div>
    );
}
export default StarGazing;
