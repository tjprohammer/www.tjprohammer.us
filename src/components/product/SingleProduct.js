
import { ColumnImg } from '../../pages/gallery/StylesGallery';


const SingleProduct = ({ prod, onClick }) => {
    // const { modalContent, handleModal } = useContext(ModalContext);

    
    return (
        <div key={prod.title} value={prod} >
            <ColumnImg src={prod.src} price={prod.price} material={prod.material} size={prod.size} />
        </div>
    );
};

export default SingleProduct;
