import React, {useState, useContext} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

import {Context} from "../../Context"

function NewAlbum() {
    const [title, setTitle] = useState("")
    const {createNewAlbum} = useContext(Context)
    const history = useHistory()
    let path = '/albums'

    const handlechange = (event) => {
        const {value} = event.target
        setTitle(value)
    }

    const handleSubmit = (e, title) => {
        e.preventDefault()
        createNewAlbum(title);
        history.push(path)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form style={{margin: "20px"}}>
                        <Form.Group>
                            <Form.Label>Album Title</Form.Label>
                            <Form.Control onChange={handlechange} type="text" value={title} name="title" placeholder="Enter title" />
                        </Form.Group>
                        <Button onClick={(e) => handleSubmit(e, title)}>Add</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewAlbum