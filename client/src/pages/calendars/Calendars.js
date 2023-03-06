import { useEffect, useState } from 'react';
import { Container, Header, HeaderDescription } from '../gallery/StylesGallery';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts, productSelector } from '../../redux/products/ProductSlice';
import ProductCard, { GalleryImg } from '../../components/product/ProductCard';
import { useNavigate } from 'react-router-dom';

const Calendars = () => {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('category=Calendar');
    const [search] = useState('');
    const [sort] = useState('');
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProducts({ page, category, sort, search }));
        dispatch(getCategories());
    }, [dispatch]);

    const productAction = useSelector(productSelector);
    const { products } = productAction;

    return (
        <Container>
            <Header>2023 Calendar </Header>
            <HeaderDescription>Limited time offer only </HeaderDescription>

                <>
                    {products.map((product) => {
                        return (
                            <GalleryImg
                                style={{width: '400px'}}
                                key={product._id}
                                product={product}
                                layout="row"
                                photos={product}
                                src={product.image}
                                onClick={() => navigate(`/products/${product._id}`)}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            />
                        );
                    })}
                </>

        </Container>
    );
};

export default Calendars;
