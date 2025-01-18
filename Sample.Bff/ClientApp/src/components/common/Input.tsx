import * as React from "react";
import { ChangeEvent, Ref } from "react";
import { Form } from "react-bootstrap";

export interface InputProps {
    label: string;
    name: string;
    value: string;
    inputRef: Ref<HTMLInputElement>;
    required: boolean;
    maxLength: number;
    errorMessage: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    value,
    inputRef,
    required = false,
    maxLength = 50,
    errorMessage = "",
    onChange
}) => <Form.Group className="mb-3">
    <Form.Label md={3} htmlFor={label}>{label}</Form.Label>
    <Form.Control
        id={label}
        name={name}
        ref={inputRef}
        type="text"
        required={required}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
    />
    <Form.Control.Feedback type="invalid">
        {errorMessage}
    </Form.Control.Feedback>
</Form.Group>;

export default Input;