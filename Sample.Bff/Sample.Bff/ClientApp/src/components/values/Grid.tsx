import React from "react"
import { DatatableWrapper, TableBody, TableHeader } from "react-bs-datatable";
import { Table } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Value from "../../models/Value";

export interface GridProps {
    values: Value[],
    openModal: (id: number) => void, 
    deleteValue: (id: number) => void
}

const Grid: React.FC<GridProps> = ({
    values,
    openModal,
    deleteValue
}) =>
    <DatatableWrapper
        body={values}
        headers={[
            { title: "Id", prop: "id", isSortable: true },
            { title: "Name", prop: "name", isSortable: true },
            {
                prop: "id", isSortable: false, cellProps: { style: { textAlign: "center" } },
                cell: (v: Value) =>
                    <button className="delete" onClick={() => deleteValue(v.id)}>
                        <FaTimes />
                    </button>
            }
        ]}
    >
        <Table striped={true} hover={true} className="table-light">
            <TableHeader
                classes={{
                    thead: "table-header"
                }}
            />
            <TableBody
                classes={{
                    tbody: "table-body",
                    tr: "link"
                }}
                onRowClick={(v: Value) => openModal(v.id)}
            />
        </Table>
    </DatatableWrapper>;

export default Grid;