import { Container, Header, HeaderDescription, Row, Column } from './StylesGallery';
import { ProductState } from '../../components/context/ProductContext';
import SingleProduct from '../../components/product/SingleProduct';
import { Link } from 'react-router-dom';


function TheHighAlpine() {
    const { mountainProducts } = ProductState();

    return (
        <div
            style={{
                position: 'absolute',
                width: '100%'
            }}
        >
            <Header> The High Alpine </Header>
            <HeaderDescription>Into the thin air</HeaderDescription>
            <Container>
                <Row>
                    <Column>
                        {mountainProducts.slice(0, 14).map((prod, index) => (
                            <Link to={`/thehighalpine/${prod.title}`}>
                                <SingleProduct key={mountainProducts.index} prod={prod} src={prod.src} />
                            </Link>
                        ))}
                    </Column>
                    <Column>
                        {mountainProducts.slice(14, 29).map((prod) => (
                            <Link to={`/thehighalpine/${prod.title}`}>
                                <SingleProduct key={mountainProducts.title} src={prod.src} prod={prod} />
                            </Link>
                        ))}
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default TheHighAlpine;
