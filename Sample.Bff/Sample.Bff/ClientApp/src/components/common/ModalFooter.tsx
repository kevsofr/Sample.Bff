import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalFooter: React.FC<{ close: () => void }> = ({
    close
}) =>
    <Modal.Footer>
        <Button variant="secondary" onClick={close}>
            Close
        </Button>
        <Button type="submit" variant="primary">
            OK
        </Button>
    </Modal.Footer>;

export default ModalFooter;