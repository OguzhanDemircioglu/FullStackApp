import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SparePartList from "../../components/sparePartList/SparePartList";

const SparePart = () => {
  return (
    <Row>
      <Col sm={2}>
        <Container>yedek parçalar kategori</Container>
      </Col>
      <Col sm={9}>
        <SparePartList />
      </Col>
    </Row>
  );
};

export default SparePart;
