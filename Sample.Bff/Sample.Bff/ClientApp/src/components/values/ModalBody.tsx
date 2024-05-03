import React from "react";
import { Modal } from "react-bootstrap";
import Input, { InputProps } from "../common/Input";
import Label, { LabelProps } from "../common/Label";

export interface ModalBodyProps {
    isCreation: boolean,
    idInputProps: InputProps,
    labelInputProps: LabelProps,
    valueInputProps: InputProps
}

const ModalBody: React.FC<ModalBodyProps> = ({
    isCreation,
    idInputProps,
    labelInputProps,
    valueInputProps
}) =>
    <Modal.Body>
        {
            isCreation
            ? <Input {...idInputProps} />
            : <Label {...labelInputProps}  />
        }
        <Input {...valueInputProps} />
    </Modal.Body>;

export default ModalBody;