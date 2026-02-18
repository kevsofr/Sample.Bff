import * as React from "react";
import { Modal } from "react-bootstrap";
import Input, { InputProps } from "../../../components/common/Input";
import Label, { LabelProps } from "../../../components/common/Label";
import NumericInput, { NumericInputProps } from "../../../components/common/NumericInput";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ValueForm } from "../../../schemas/valueSchema";
import Value from "../../../models/Value";

export interface ModalBodyProps {
    isCreation: boolean;
    value: Value | undefined;
    register: UseFormRegister<ValueForm>;
    errors: FieldErrors<ValueForm>;
}

const ModalBody: React.FC<ModalBodyProps> = ({
    isCreation,
    value,
    register,
    errors
}) => {
    const idInputProps: NumericInputProps<ValueForm> = {
        label: "Id",
        fieldName: "id",
        register,
        error: errors.id
    };

    const labelProps: LabelProps<ValueForm> = {
        label: "Id",
        value: value?.id.toString() ?? "",
        fieldName: "id",
        register
    };

    const nameInputProps: InputProps<ValueForm> = {
        label: "Name",
        fieldName: "name",
        register,
        maxLength: 50,
        error: errors.name
    };

    return (
        <Modal.Body>
            {isCreation
                ? <NumericInput {...idInputProps} />
                : <Label {...labelProps} />
            }
            <Input {...nameInputProps} />
        </Modal.Body>
    );
};

export default ModalBody;