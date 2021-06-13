import BootstrapModal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'

const Modal = ({name, id}) => {
    return (
        <div>
            <BootstrapModal.Dialog>
                <BootstrapModal.Header closeButton>
                    <BootstrapModal.Title>Are you sure you want to delete {name}</BootstrapModal.Title>
                </BootstrapModal.Header>

                <BootstrapModal.Body>
                    <p>The change can not be undone and the item will be deleted forever</p>
                </BootstrapModal.Body>

                <BootstrapModal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="warning">Delete</Button>
                </BootstrapModal.Footer>
            </BootstrapModal.Dialog>
        </div>
    )
}

export default Modal
