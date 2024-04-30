import React from "react";
import { Form } from "react-bootstrap";

export interface LabelProps {
    label: string,
    value: string
}

const Label: React.FC<LabelProps> = ({
    label,
    value
}) => <Form.Group className="mb-3">
    <Form.Label md={3}>{label}</Form.Label>
    <Form.Label md={9}>{value}</Form.Label>
</Form.Group>;

export default Label;