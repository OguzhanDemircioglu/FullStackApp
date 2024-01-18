import React, {useEffect, useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import SparePartList from "../../components/SparePart/SparePartList/SparePartList";
import {BASE_URL} from "../../common/constant";

const SparePart = () => {

    const [item, setItem] = useState([]);

    const getSpareParts = () => {
        fetch(BASE_URL + 'products/findAll')
            .then(response => {
                if (!response.ok) {
                    throw new Error('İşlem şuan gerçekleştirilemiyor');
                }
                return response.json();
            })
            .then(data => {
                setItem(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {

        getSpareParts();

    }, []);

  return (
    <Row>
      <Col sm={3}>
        <Container>Categoriler</Container>
      </Col>
      <Col sm={9}>
        <SparePartList items={item}/>
      </Col>
    </Row>
  );
};

export default SparePart;
