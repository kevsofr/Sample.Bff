import * as React from "react";
import { useRef } from "react";
import { Form, Modal } from "react-bootstrap";
import Value from "../../../models/Value";
import { InputProps } from "../../../components/common/Input";
import { LabelProps } from "../../../components/common/Label";
import { IUseValueModal, useValueModal } from "../useValueModal";
import ModalHeader, { ModalHeaderProps } from "../../../components/common/ModalHeader";
import ModalBody, { ModalBodyProps } from "./ModalBody";
import ModalFooter from "../../../components/common/ModalFooter";
import { useCreateValueMutation, useGetValueQuery, useUpdateValueMutation } from "../../../services/valueApi";
import { useDispatch, useSelector } from "react-redux";
import { selectValuesUi } from "../valuesUiSlice";
import { closeModal } from "../valuesUiSlice";

const ValueModal: React.FC = () => {
    const dispatch = useDispatch();
    const { displayModal, valueId } = useSelector(selectValuesUi);
    const isCreation = valueId == 0;
    
    let value: Value | undefined;
    const [createValue] = useCreateValueMutation();
    const [updateValue] = useUpdateValueMutation();
    let submit = (v: Value) => createValue(v);

    if (!isCreation) {
        submit = (v: Value) => updateValue(v);
    }

    value = useGetValueQuery(valueId, {
        skip: isCreation
    }).data;

    const {
        validated,
        inputs,
        idInputRef,
        handleInputChange,
        handleSubmit,
        close
    } : IUseValueModal = useValueModal(isCreation, value, submit, () => dispatch(closeModal()));

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
        isCreation,
        creationTitle: "Add value",
        updateTitle: "Update value"
    };

    const modalBodyProps: ModalBodyProps = {
        isCreation,
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