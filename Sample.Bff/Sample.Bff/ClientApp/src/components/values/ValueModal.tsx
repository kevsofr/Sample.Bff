import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Value from "../../models/Value";

export interface ValueModalProps {
    displayModal: boolean,
    value: Value,
    addValue: (v: Value) => void,
    closeModal: () => void
}

const ValueModal: React.FC<ValueModalProps> = ({
    displayModal,
    value,
    addValue,
    closeModal
}) => {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState(value.id);
    const [name, setName] = useState(value.name);

    const title: string = value.id === 0 ? "Add value" : "Update value";

    const handleSubmit = (e: any): void => {
        const form = e.currentTarget;

        if (form.checkValidity() === false ||
            Number.isNaN(id) || id <= 0 || id >= 1_000) {
                console.log("Error");
                setValidated(true);
                e.preventDefault();
                e.stopPropagation();
        } else {
            addValue({
                id: id,
                name: name
            });
            setValidated(false);
        }
    };

    const close = () => {
        setValidated(false);
        closeModal();
    };

    return <Modal show={displayModal} onHide={close}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label md={3}>Id</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        maxLength={3}
                        onChange={(e) => setId(parseInt(e.currentTarget.value))}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a number between 1 and 999.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label md={3}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        maxLength={10}
                        onChange={(e) => setName(e.currentTarget.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a name.
                    </Form.Control.Feedback>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button type="submit" variant="primary">
                    OK
                </Button>
            </Modal.Footer>
        </Form>
    </Modal>;
};

export default ValueModal;