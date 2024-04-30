import React, { useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Value from "../../models/Value";
import Input, { InputProps } from "../common/Input";
import Label, { LabelProps } from "../common/Label";

export interface ValueModalProps {
    displayModal: boolean,
    value: Value | null,
    submit: (v: Value, isCreation: boolean) => void,
    closeModal: () => void
}

const ValueModal: React.FC<ValueModalProps> = ({
    displayModal,
    value,
    submit,
    closeModal
}) => {
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState(value?.id.toString() ?? "");
    const [name, setName] = useState(value?.name.toString() ?? "");
    const idInputRef: React.Ref<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const idInputProps: InputProps = {
        label: "Id",
        value: id,
        refInput: idInputRef,
        required: true,
        maxLength: 3,
        errorMessage: "Please provide a number between 1 and 999.",
        onChange: (v: string) => setId(v)
    };

    const labelInputProps: LabelProps = {
        label: "Id",
        value: id,
    };

    const valueInputProps: InputProps = {
        label: "Value",
        value: name,
        refInput: useRef<HTMLInputElement>(null),
        required: true,
        maxLength: 50,
        errorMessage: "Please provide a name.",
        onChange: setName
    };

    const handleSubmit = (e: any): void => {
        setValidated(true);
        
        e.preventDefault();
        e.stopPropagation();
        
        const form = e.currentTarget;
        const idValue: number = parseInt(id);
        let checkCustomValidity: boolean = false;

        if (idInputRef !== null && idInputRef.current !== null
            && (Number.isNaN(idValue) || idValue <= 0 || idValue >= 1_000)) {
            idInputRef.current.setCustomValidity("Error");
        } else if (idInputRef !== null && idInputRef.current !== null) {
            idInputRef.current.setCustomValidity("");
            checkCustomValidity = true;
        }

        if (form.checkValidity() && checkCustomValidity) {
            submit({
                id: idValue,
                name: name
            }, value === null);
        }
    };

    const close = () => {
        setValidated(false);
        closeModal();
    };

    return <Modal show={displayModal} onHide={close}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>{value === null ? "Add value" : "Update value"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    value === null
                    ? <Input {...idInputProps} />
                    : <Label {...labelInputProps}  />
                }
                <Input {...valueInputProps} />
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