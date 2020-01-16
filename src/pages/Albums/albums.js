import React, {useContext} from 'react'

import {Context} from "../../Context"
import Album from "../../components/album/Album"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Albums() {
  const { allAlbums } = useContext(Context);

  const albumElement = allAlbums.map((album, i) => (
    <Col align="center" sm key={i}>
      <Album album={album} />
    </Col>
  ));

  return (
    <Container style={{ paddingTop: "15px" }}>
      <Row className="justify-content-md-center">{albumElement}</Row>
    </Container>
  );
}

export default Albums