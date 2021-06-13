import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import NavBar from "../NavBar"

const addForm = () => {
    return (
        <div>
            <NavBar />
            <div style={{ padding: "10%" }}>
                <Card>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="itemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control placeholder="Enter the name of the item"/>
                            </Form.Group>

                            <Form.Group controlId="itemDescription">
                                <Form.Label>Item Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter the description of the item"/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default addForm
