import React from "react";
import { useNavigate } from "react-router-dom";
import {BsCartX} from "react-icons/bs"
import { PageWrapper } from "../../pages/home/StyleHome";
import { StyledButton } from "../../pages/home/Home";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div>
      <BsCartX size={80} style={{size: "10em"}} />
        <StyledButton  onClick={() => navigate("/gallery")}>
          No Products in Cart!
        </StyledButton>
      </div>
    </PageWrapper>
  );
};

export default EmptyCart;
