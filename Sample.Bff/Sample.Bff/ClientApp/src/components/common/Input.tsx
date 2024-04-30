import React, { Ref } from "react";
import { Form } from "react-bootstrap";

export interface InputProps {
    label: string,
    value: string,
    refInput: Ref<HTMLInputElement>,
    required: boolean,
    maxLength: number,
    errorMessage: string,
    onChange: (e: any) => void
}

const Input: React.FC<InputProps> = ({
    label,
    value,
    refInput,
    required = false,
    maxLength = 50,
    errorMessage = "",
    onChange
}) => <Form.Group className="mb-3">
    <Form.Label md={3} htmlFor={label}>{label}</Form.Label>
    <Form.Control
        id={label}
        ref={refInput}
        type="text"
        required={required}
        maxLength={maxLength}
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
    />
    <Form.Control.Feedback type="invalid">
        {errorMessage}
    </Form.Control.Feedback>
</Form.Group>;

export default Input;