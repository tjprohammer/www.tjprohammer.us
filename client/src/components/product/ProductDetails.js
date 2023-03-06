import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container } from 'reactstrap';
import styled from 'styled-components';
import { TitleDescrip } from '../../pages/aboutTJ/StylesAbout';
import { ColumnImg, HeaderDescription } from '../../pages/gallery/StylesGallery';
import { StyledButton } from '../../pages/home/Home';
import { Title, TitleDescription } from '../../pages/home/StyleHome';
import { addToCart } from '../../redux/cart/CartSlice';
import { getProducts, productSelector } from '../../redux/products/ProductSlice';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineRollback } from 'react-icons/ai';
import BackButton from '../BackButton/BackButton';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const productAction = useSelector(productSelector);
    const { products } = productAction;

    const [productDetail, setProductDetail] = useState([]);
    const params = useParams();

    const [search] = useState('');
    const [category] = useState('');
    const [sort] = useState('');
    const [page] = useState(1);
    const navigate = useNavigate();

    const [material, setMaterial] = useState();
    const [size, setSize] = useState(null);
    const [sizeList, setSizeList] = useState([]);
    const [price, setPrice] = useState(0);

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleClose = () => {
        setModalVisible(false)
    }

    useEffect(() => {
        dispatch(getProducts({ page, category, sort, search }));
    }, [dispatch]);
    // console.log(products);

    // console.log(params.id);

    useEffect(() => {
        if (params.id) {
            products.forEach((product) => {
                if (product._id === params.id) {
                    setProductDetail(product);
                }
            });
        }
    }, [params.id, products]);

    // console.log(params.id)
    // console.log(productDetail.title)

    const _id = params.id;
    const title = productDetail.title;
    const image = productDetail.image;

    // handle change event of the country dropdown
    const handleMaterialChange = (obj) => {
        setMaterial(obj);
        setSizeList(obj.sizes);
        setSize(null);
        // console.log(obj)
    };
    // console.log(material)
    // handle change event of the language dropdown
    const handleSizeChange = (obj) => {
        setSize(obj);
        // console.log(obj)
    };
    // console.log(size)

    // generate the price when both dropdowns are selected
    useEffect(() => {
        if (material && size) {
            setPrice(`${size.price}`);
        }
    }, [material, size]);

    const handleAddItemsToCart = () => {
        dispatch(addToCart({ _id, title, image, material, size, price }));
        toast.success(`${productDetail.title} is added to cart`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    // console.log(productDetail.materials)
    return (
        <Container style={{ paddingTop: '6em', paddingBottom: '10em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card
                body
                color="#222"
                outline
                style={{ backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '35em', overflow: 'hidden', paddingBottom: '15em', paddingTop: '10em' }}
            >
                <BackButton />
                <ColumnImg style={{ minWidth: '22em', maxWidth: '60em' }} alt={productDetail.title} src={productDetail.image} onClick={toggleModal} />
                <CardBody style={{ paddingLeft: '3em', maxWidth: '45em', alignItems: 'center' }}>
                    <CardTitle tag="h2">{productDetail.title}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                        {productDetail.description}
                    </CardSubtitle>

                    <div style={{ width: 300, marginBottom: 20 }}>
                        <b>Material Type</b>

                        <Select
                            // style={{overflow: 'scroll', height: '100%'}}
                            placeholder="Select type of material"
                            value={material}
                            options={productDetail.materials}
                            onChange={handleMaterialChange}
                            getOptionLabel={(x) => x.material_type}
                            getOptionValue={(x) => x.price}
                        />
                        <br />
                        <b>Size</b>
                        <Select placeholder="Select a size" value={size} options={sizeList} onChange={handleSizeChange} getOptionLabel={(x) => x.size} getOptionValue={(x) => x.price} />
                    </div>
                    <HeaderDescription style={{ textAlign: 'left' }}>
                        Price:<strong style={{ fontWeight: '700', color: 'teal' }}>$ {price}</strong>
                    </HeaderDescription>

                    <StyledButton style={{ alignItems: 'center', display: 'flex', position: 'relative' }} onClick={handleAddItemsToCart}>
                        Add To Cart
                    </StyledButton>
                </CardBody>
            </Card>
            {modalVisible && (
                <Modal onClick={toggleClose} >
                    <CloseButton className="close" onClick={toggleClose}>&times;</CloseButton>
                    <img src={productDetail.image} />
                </Modal>
            )}
        </Container>
    );
};

export default React.memo(ProductDetail);

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 90%;
        max-height: 90%;
    }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  background-color: white;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;
