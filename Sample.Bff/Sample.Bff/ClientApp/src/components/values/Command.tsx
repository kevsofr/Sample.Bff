import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const Command: React.FC<{ openModal: () => void }> = ({
    openModal
}) =>
    <Row>
       <Col className="d-flex justify-content-end">
            <button className="add" onClick={openModal}>
                <FaPlus />
            </button>
       </Col> 
    </Row>;

export default Command;