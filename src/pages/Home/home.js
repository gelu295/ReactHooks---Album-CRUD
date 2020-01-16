import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Start() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs="5">
          <h3 className="text-center">Album Gallery</h3>
          <Card>
            <Card.Header
              className="text-center"
              style={{ backgroundColor: "#337ab7", color: "#fff" }}
            >
              About application
            </Card.Header>
            <Card.Body>
              <Card.Text>
                The application works on the CRUD principles. It's Web
                Application. It supports the addition, reading, editing and
                deletion of books.
              </Card.Text>
              <Link to="/albums">
                <Button style={{ backgroundColor: "#337ab7", color: "#fff" }}>
                  Go to Gallery
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Start;
