import { Container, Header, HeaderDescription, Row, Column } from './StylesGallery';
import SingleProduct from '../../components/product/SingleProduct';
import { ProductState } from '../../components/context/ProductContext';
import { Link } from 'react-router-dom';

function LushRainforests() {
    const { rainforestsProducts } = ProductState();
    return (
        <div
            style={{
                position: 'absolute',
                height: '270%',
                width: '100%',
                marginBottom: '4em'
            }}
        >
            <Header> Lush Rainforests </Header>
            <HeaderDescription>Earth's oldest living ecosystem</HeaderDescription>
            <Container>
                <Row>
                    <Column>
                        {rainforestsProducts.slice(0, 6).map((prod) => (
                            <Link to={`/lushrainforests/${prod.title}`}>
                                <SingleProduct key={rainforestsProducts.title} prod={prod} src={prod.src} />
                            </Link>
                        ))}
                    </Column>
                    <Column>
                        {rainforestsProducts.slice(6, 13).map((prod) => (
                            <Link to={`/lushrainforests/${prod.title}`}>
                                <SingleProduct key={rainforestsProducts.title} prod={prod} />
                            </Link>
                        ))}
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default LushRainforests;
