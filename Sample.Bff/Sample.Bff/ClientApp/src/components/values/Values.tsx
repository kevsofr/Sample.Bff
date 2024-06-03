import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { Col, Row } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Title from "./Title";
import Command from "./Command";
import ValueModal, { ValueModalProps } from "./ValueModal";
import Value from "../../models/Value";
import Datatable, { DatatableProps } from "../common/datatable/Datatable";

const Values: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_VALUES" });
    }, [dispatch]);

    const datatableProps: DatatableProps<Value> = {
        data: useSelector((s: RootState) => s.value.values),
        headers: [
            { title: "Id", prop: "id", isSortable: true },
            { title: "Name", prop: "name", isSortable: true },
            {
                prop: "id", isSortable: false, cellProps: { style: { textAlign: "center" } },
                cell: (v: Value) =>
                    <button className="delete" onClick={() => dispatch({ type: "DELETE_VALUE", payload: v.id })}>
                        <FaTimes />
                    </button>
            }
        ],
        onRowClick: (v: Value) => dispatch({ type: "FETCH_VALUE", payload: v.id }),
        noResults: "Aucune valeur trouvée",
        loading: useSelector((s: RootState) => s.value.loading),
        error: useSelector((s: RootState) => s.value.error)
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
                <Datatable {...datatableProps} />
            </Col>
        </Row>
        <Command openModal={() => dispatch({ type: "OPEN_MODAL_VALUE" })} />
        <ValueModal {...valueModalProps} />
    </>;
};

export default Values;