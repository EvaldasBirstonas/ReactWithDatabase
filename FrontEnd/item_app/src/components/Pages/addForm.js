import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import NavBar from "../NavBar"
import { React, useState } from "react";
import { useHistory } from 'react-router-dom';

const AddForm = () => {
    let history = useHistory();
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [validated, setValidated] = useState(false)
    const submit = e => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        if (name !== "") {
            fetch(`https://localhost:44351/Item/Post`, {
                method: 'POST',
                body: JSON.stringify({ "itemName": name, "itemDescription": description }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        history.push('/');
        setValidated(true);
    }
    return (
        <div>
            <NavBar />
            <div style={{ padding: "10%" }}>
                <Card>
                    <Card.Body>
                        <Form noValidate validated={validated}>
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control required type="text" onChange={ e => setName(e.target.value)} value={name} placeholder="Enter the name of the item"/>
                            </Form.Group>

                            <Form.Group controlId="itemDescription">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control onChange={ e => setDescription(e.target.value)} value={description} as="textarea" rows={3} placeholder="Enter the description of the item"/>
                            </Form.Group>

                            <Button variant="primary" onClick={submit}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default AddForm
