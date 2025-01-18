import * as React from "react";
import { Form } from "react-bootstrap";

export interface LabelProps {
    label: string;
    value: string;
}

const Label: React.FC<LabelProps> = ({
    label,
    value
}) => <Form.Group className="mb-3">
    <span>{label}</span>&nbsp;&nbsp;&nbsp;
    <span>{value}</span>
</Form.Group>;

export default Label;