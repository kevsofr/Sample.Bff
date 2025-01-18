import * as React from "react";
import { Col, Row } from "react-bootstrap";

const Title: React.FC = () =>
    <Row className="my-5">
        <Col md={12}>
            <h2>List of fake values</h2>
        </Col> 
    </Row>;

export default Title;