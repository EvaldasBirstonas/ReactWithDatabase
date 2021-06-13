import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'

const InformationTable = (props) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [id, setID] = useState(-1);
    const [itemList, setItemList] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        fetch(`https://localhost:44351/Item/Delete?id=` + id, {
            method: 'DELETE',
        })
        setItemList(itemList.filter(x => x.id != id));
        handleClose();
    };
    console.log(props);
    //setItemList(() => props.informationlist);
    useEffect(() => {
        setItemList(props.informationlist);
    }, [props.informationlist]);
    const submit = (e, id) => {
        console.log(id)
        e.preventDefault()
        //console.log(e)
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item name</th>
                        <th>Item description</th>
                        <th>Date of adding</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { itemList.map(data => (
                        <tr key={data.id}>
                            <td>{ data.id }</td>
                            <td>{ data.name } </td>
                            <td>{ data.description }</td>
                            <td>{ data.timeOfAddition }</td>
                            <td><Button variant="danger" onClick={() => {setName(data.name); setID(data.id); handleShow()}}>Delete</Button></td>
                            {//<td><Button variant="danger" onClick={(e) => submit(e, data.id)}>Delete</Button></td>
                            }
                        </tr>
                    )) }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>The change can not be undone and the item will be deleted forever</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

Table.defaultProps = {
    informationlist: [],
}

export default InformationTable
