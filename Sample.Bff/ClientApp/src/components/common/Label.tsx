import { Col, Row } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface LabelProps<TFieldValues extends FieldValues> {
    label: string;
    value: string;
    fieldName: Path<TFieldValues>;
    register: UseFormRegister<TFieldValues>;
}

const Label = <T extends FieldValues,>({
    label,
    value,
    fieldName,
    register
}: LabelProps<T>) =>
    <Row className="mb-3">
        <Col md={3}>
            <span>{label}</span>
        </Col>
        <Col md={9}>
            <span>{value}</span>
            <input type="hidden" {...register(fieldName)} />
        </Col>
    </Row>;

export default Label;