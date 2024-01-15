import React from "react";
import ProductDetailMain from "../../components/ProductDetail/ProductDetailMain/ProductDetailMain";
import ProductDetailMonthlyDeals from "../../components/ProductDetail/ProductDetailMonthlyDeals/ProductDetailMonthlyDeals";
import { Container } from "react-bootstrap";
const ProductDetail = () => {
  return (
    <div>
      <ProductDetailMain props="products" />
      <Container>
        <ProductDetailMonthlyDeals />
      </Container>
    </div>
  );
};

export default ProductDetail;
