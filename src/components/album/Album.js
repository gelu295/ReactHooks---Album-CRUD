import React, {useContext } from 'react';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import { Context } from "../../Context";

function Album({album}) {
    const {deleteAlbum} = useContext(Context)

    return (
      <Card border="info" style={{ width: '16rem', height: '21rem', margin: '20px'}}>
        <Card.Img variant="top" src="/photos1.jpg"></Card.Img>
        <Card.Body>
            <Card.Title>{album.title}</Card.Title>
            <ButtonGroup className="mr-2" style={{ position: "absolute", bottom: "9px", right: "5px"}}>
              <Link to={{
                pathname:`/edit/${album.id}`, 
                state: {singleAlbum: album}}}
              >
              <Button variant="primary" style={{margin: "5px"}}>Edit</Button>
              </Link>
              <Button onClick={() => deleteAlbum(album.id)} variant="danger" style={{margin: "5px"}}>Delete</Button>
            </ButtonGroup>
        </Card.Body>
      </Card>
    )
}

export default Album;