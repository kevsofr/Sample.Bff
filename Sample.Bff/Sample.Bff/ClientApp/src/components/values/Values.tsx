import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Grid, { GridProps } from "./Grid";
import { Col, Row } from "react-bootstrap";
import Title from "./Title";
import Command from "./Command";
import ValueModal, { ValueModalProps } from "./ValueModal";
import Value from "../../models/Value";

const Values: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_VALUES" })
    }, [dispatch]);

    const gridProps: GridProps = {
        values: useSelector((s: RootState) => s.value.values),
        getValue: (id: number) => dispatch({ type: "FETCH_VALUE", payload: id }), 
        deleteValue: (id: number) => dispatch({ type: "DELETE_VALUE", payload: id })
    };

    const valueModalProps: ValueModalProps = {
        displayModal: useSelector((s: RootState) => s.value.displayModal),
        value: useSelector((s: RootState) => s.value.currentValue),
        submit: (v: Value, isCreation: boolean) => isCreation
            ? dispatch({ type: "CREATE_VALUE", payload: v })
            : dispatch({ type: "UPDATE_VALUE", payload: v }),
        closeModal: () => dispatch({ type: "CLOSE_MODAL_VALUE" })
    };

    return <>
        <Title />
        <Row>
            <Col md={12}>
                <Grid {...gridProps} />
            </Col>
        </Row>
        <Command openModal={() => dispatch({ type: "OPEN_MODAL_VALUE" })} />
        <ValueModal {...valueModalProps} />
    </>;
};

export default Values;