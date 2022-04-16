import React, { useState } from 'react';
import { Header } from '../../pages/gallery/StylesGallery';
import SingleProduct from './SingleProduct';

function SelectedProduct({prod}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
        setIsModalOpen(true)
  }
  console.log(prod)
  return (
  <div>
    <Header title={prod.title}>{prod.title}</Header>
    <SingleProduct prod={prod} key={prod.title} />
  </div>
  )
}

export default SelectedProduct;
