import { useEffect, useState } from 'react';
import { Container, Header, HeaderDescription } from './StylesGallery';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, productSelector } from '../../redux/products/ProductSlice';
import ProductCard from '../../components/product/ProductCard';
import { Spinner } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import { ScrollToTopButton } from '../../components/scrollToTop/ScrollToTop';

function TheHighAlpine() {
    const [category, setCategory] = useState('category=The High Alpine');
    const [search] = useState('');
    const [sort] = useState('');
    const [page, setPage] = useState(1);
    const navigate = useNavigate()
    const dispatch = useDispatch();
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
            <Header> The High Alpine </Header>
            <HeaderDescription>Into the thin air</HeaderDescription>

            {products.length > 0 ? (
                <>
                    {products.map((product) => {
                        return <ProductCard key={product._id} photos={products} product={product} />;
                    })}
                </>
            ) : (
                <Spinner />
            )}
            <ScrollToTopButton />
        </Container>
    );
}

export default TheHighAlpine;
