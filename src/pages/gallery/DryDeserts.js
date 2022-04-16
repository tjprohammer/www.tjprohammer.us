
import { Link } from 'react-router-dom';
import { ProductState } from '../../components/context/ProductContext';
import SingleProduct from '../../components/product/SingleProduct';

import { Container, Header, HeaderDescription, Row, Column, ColumnImg } from './StylesGallery';


function DryDeserts() {
    const { desertsProducts } = ProductState();
    return (
        <div
            style={{
                position: 'absolute',
                width: '100%'
            }}
        >
            <Header> Dry Deserts </Header>
            <HeaderDescription>Hostile for plant and animal life</HeaderDescription>
            <Container>
                <Row style={{marginLeft: '0'}}>
                    <Column>
                        {desertsProducts.slice(0, 12).map((prod) => (
                            <Link to={`/drydeserts/${prod.title}`}>
                                <SingleProduct key={prod.title} prod={prod} src={prod.src} />
                            </Link>
                        ))}
                    </Column>
                    <Column>
                        {desertsProducts.slice(12, 30).map((prod) => (
                            <Link to={`/drydeserts/${prod.title}`}>
                                <SingleProduct key={prod.title} prod={prod} />
                            </Link>
                        ))}
                    </Column>
                </Row>
            </Container>
        </div>
    );
}

export default DryDeserts;
