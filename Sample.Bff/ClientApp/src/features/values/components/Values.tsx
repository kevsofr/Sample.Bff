import * as React from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Title from "./Title";
import Command from "./Command";
import ValueModal from "./ValueModal";
import Value from "../../../models/Value";
import Datatable, { DatatableProps } from "../../../components/common/datatable/Datatable";
import { useDeleteValueMutation, useGetValuesQuery } from "../../../services/valueApi";
import { openModal } from "../valuesUiSlice";

const Values: React.FC = () => {
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetValuesQuery({});
    const [deleteValue] = useDeleteValueMutation();

    const datatableProps: DatatableProps<Value> = {
        data: data?.values ?? [],
        headers: [
            { title: "Id", prop: "id", isSortable: true },
            { title: "Name", prop: "name", isSortable: true },
            {
                prop: "id", isSortable: false, cellProps: { style: { textAlign: "center" } },
                cell: v =>
                    <button className="delete" onClick={() => deleteValue(v.id)}>
                        <FaTimes />
                    </button>
            }
        ],
        onRowClick: v => dispatch(openModal(v.id)),
        noResults: "Aucune valeur trouvée",
        isLoading,
        isError
    };

    return <>
        <Title />
        <Row>
            <Col md={12}>
                <Datatable {...datatableProps} />
            </Col>
        </Row>
        <Command openModal={() => dispatch(openModal(0))} />
        <ValueModal />
    </>;
};

export default Values;
