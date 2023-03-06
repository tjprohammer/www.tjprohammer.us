import { useEffect, useState } from 'react';
import { Container, Header, HeaderDescription } from './StylesGallery';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, productSelector } from '../../redux/products/ProductSlice';
import ProductCard from '../../components/product/ProductCard';
import { Spinner } from 'reactstrap';

import { ScrollToTopButton } from '../../components/scrollToTop/ScrollToTop';
import { useNavigate } from 'react-router-dom';

function DryDeserts() {
    const [category, setCategory] = useState('category=Dry Deserts');
    const [search] = useState('');
    const [sort] = useState('');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getProducts({ page, category, sort, search }));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const productAction = useSelector(productSelector);
    const { products } = productAction;

    return (
        <Container>
            <Header> Dry Deserts </Header>
            <HeaderDescription>Hostile for plant and animal life</HeaderDescription>

            {products.length > 0 ? (
                <>
                    {products.map((product) => {
                        return <ProductCard key={product._id} product={product} />;
                    })}
                </>
            ) : (
                <Spinner />
            )}
            <ScrollToTopButton />
        </Container>
    );
}

export default DryDeserts;
