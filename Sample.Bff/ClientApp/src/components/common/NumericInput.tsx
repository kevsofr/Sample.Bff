import { Col, Row } from "react-bootstrap";
import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface NumericInputProps<TFieldValues extends FieldValues> {
    label: string;
    fieldName: Path<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
    error: FieldError | undefined;
}

const NumericInput = <T extends FieldValues,>({
    label,
    fieldName,
    register,
    error
}: NumericInputProps<T>) =>
    <Row className="mb-3">
        <Col>
            <label
                htmlFor={fieldName}
                className="form-label">
                {label}
            </label>
            <input
                type="number"
                id={fieldName}
                className="form-control"
                inputMode="numeric"
                step={1}
                {...register(fieldName, {
                    valueAsNumber: true
                })}
            />
            {error && <p className="invalid-form">{error.message}</p>}
        </Col>
    </Row>;

export default NumericInput;