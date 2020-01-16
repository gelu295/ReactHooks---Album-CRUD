import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import { Context } from "../../Context";

function Edit(props) {
  const album = props.location.state.singleAlbum;
  const [singleAlbum, setSingleAlbum] = useState(album.title);
  const { editAlbum } = useContext(Context);
  const history = useHistory();
  let path = "/albums";

  const handleChange = event => {
    const { value } = event.target;
    setSingleAlbum(value);
  };

  const handleSubmit = (e, singleAlbum, id) => {
    e.preventDefault();
    editAlbum(singleAlbum, id);
    history.push(path);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form style={{ margin: "20px" }}>
            <Form.Group>
              <Form.Label>Album Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                value={singleAlbum}
                name="title"
                placeholder="Enter title"
              />
            </Form.Group>
            <Button
              onClick={e => {
                handleSubmit(e, singleAlbum, album.id);
              }}
              type="submit"
            >
              Edit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;
