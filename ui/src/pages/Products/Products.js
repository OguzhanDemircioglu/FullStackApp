import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../../components/productList/ProductList";

const Products = () => {
  return (
    <Row>
      <Col sm={2}>
        <Container>Ürünler categori</Container>
      </Col>
      <Col sm={9}>
        <ProductList />
      </Col>
    </Row>
  );
};

export default Products;
