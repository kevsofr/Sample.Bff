import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Grid, { GridProps } from "./Grid";
import { Col, Row } from "react-bootstrap";
import Title from "./Title";
import Command from "./Command";
import AddModal, { AddModalProps } from "./ValueModal";
import Value from "../../models/Value";

const Values: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({ type: "FETCH_VALUES" })
    }, [dispatch]);

    const gridProps: GridProps = {
        values: useSelector((s: RootState) => s.value.values),
        updateValue: (v: Value) => dispatch({ type: "UPDATE_VALUE", payload: v }), 
        deleteValue: (id: number) => dispatch({ type: "DELETE_VALUE", payload: id })
    };

    const addProps: AddModalProps = {
        displayModal: useSelector((s: RootState) => s.value.displayModal),
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
        <AddModal {...addProps} />
    </>;
};

export default Values;