import * as React from "react";
import { Modal } from "react-bootstrap";

export interface ModalHeaderProps {
    isCreation: boolean;
    creationTitle: string;
    updateTitle: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
    isCreation,
    creationTitle,
    updateTitle
}) =>
    <Modal.Header closeButton>
        <Modal.Title>{isCreation ? creationTitle : updateTitle}</Modal.Title>
    </Modal.Header>;

export default ModalHeader;