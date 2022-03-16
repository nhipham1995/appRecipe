import React from 'react';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';

function ModalShow(props) {
  console.log(props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{color: "#b84b5a", margin: 'auto'}}>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={2}></Col>
              <Col xs={12} md={6}>
                <h5>Nutrients:</h5>
                {Object.values(props.totalNutrients).map(i=>{
                  return <p>{i.label} - {Math.round(i.quantity)} {i.unit}</p>
                })}
              </Col>
              <Col xs={6} md={4}>
                <h5>Digest:</h5>
                {props.digest.map(i=> <p>{i}</p>)}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalShow;  

  
