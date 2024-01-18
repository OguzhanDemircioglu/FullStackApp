import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./SparePartList.css";

const SparePartList = ({items}) => {
    return (
        <div className="sparePartList">
            {
                items?.map(item => {
                    return (
                        <Card key={item._id}
                              style={{width: "18rem", marginBottom: "10px"}}
                              className="SparePartListCard"
                        >
                            <Card.Img variant="top" src={item.showCasePicture}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{item.dealerType}</ListGroup.Item>
                                <ListGroup.Item>{item.productType}</ListGroup.Item>
                                <ListGroup.Item>{item.modelType}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Fiyat: {item.price}</Card.Link>
                                <Card.Link href="#">Şehir: {item.adress}</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </div>
    );
};

export default SparePartList;
