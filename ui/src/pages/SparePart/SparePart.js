import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SparePartList from "../../components/SparePart/SparePartList/SparePartList";

const SparePart = () => {
  return (
    <Row>
      <Col sm={3}>
        <Container>Categoriler</Container>
      </Col>
      <Col sm={9}>
        <SparePartList />
      </Col>
    </Row>
  );
};

export default SparePart;
