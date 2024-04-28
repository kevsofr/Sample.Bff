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
        openModal: (id: number) => dispatch({ type: "OPEN_MODAL_VALUE", payload: id }), 
        deleteValue: (id: number) => dispatch({ type: "DELETE_VALUE", payload: id })
    };

    const addProps: ValueModalProps = {
        displayModal: useSelector((s: RootState) => s.value.displayModal),
        value: useSelector((s: RootState) => s.value.currentValue),
        addValue: (v: Value) => dispatch({ type: "CREATE_VALUE", payload: v }),
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
        <ValueModal {...addProps} />
    </>;
};

export default Values;