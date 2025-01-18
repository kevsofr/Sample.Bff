import * as React from "react";
import { useRef } from "react";
import { Form, Modal } from "react-bootstrap";
import Value from "../../models/Value";
import { InputProps } from "../common/Input";
import { LabelProps } from "../common/Label";
import { IUseValueModal, useValueModal } from "../../hooks/useValueModal";
import ModalHeader, { ModalHeaderProps } from "../common/ModalHeader";
import ModalBody, { ModalBodyProps } from "./ModalBody";
import ModalFooter from "../common/ModalFooter";

export interface ValueModalProps {
    displayModal: boolean;
    value: Value | null;
    submit: (v: Value, isCreation: boolean) => void;
    closeModal: () => void;
}

const ValueModal: React.FC<ValueModalProps> = ({
    displayModal,
    value,
    submit,
    closeModal
}) => {
    const {
        validated,
        inputs,
        idInputRef,
        handleInputChange,
        handleSubmit,
        close
    } : IUseValueModal = useValueModal(value, submit, closeModal);

    const idInputProps: InputProps = {
        label: "Id",
        name: "id",
        value: inputs.id,
        inputRef: idInputRef,
        required: true,
        maxLength: 3,
        errorMessage: "Please provide a number between 1 and 999.",
        onChange: handleInputChange
    };

    const labelInputProps: LabelProps = {
        label: "Id",
        value: inputs.id,
    };

    const valueInputProps: InputProps = {
        label: "Value",
        name: "name",
        value: inputs.name,
        inputRef: useRef<HTMLInputElement>(null),
        required: true,
        maxLength: 50,
        errorMessage: "Please provide a name.",
        onChange: handleInputChange
    };

    const modalHeaderProps: ModalHeaderProps = {
        isCreation: value === null,
        creationTitle: "Add value",
        updateTitle: "Update value"
    };

    const modalBodyProps: ModalBodyProps = {
        isCreation: value === null,
        idInputProps: idInputProps,
        labelInputProps: labelInputProps,
        valueInputProps: valueInputProps
    };

    return <Modal show={displayModal} onHide={close}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <ModalHeader {...modalHeaderProps} />
            <ModalBody {...modalBodyProps} />
            <ModalFooter close={close} />
        </Form>
    </Modal>;
};

export default ValueModal;