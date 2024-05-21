import { Col, Row, Table } from "react-bootstrap";
import { DatatableWrapper, TableColumnType, TableHeader } from "react-bs-datatable";
import DatatableBody, { DatatableBodyProps } from "./DatatableBody";
import DatatableLoading from "./DatatableLoading";
import DatatableError from "./DatatableError";

export interface DatatableProps<T extends {}> {
    data: T[];
    headers: TableColumnType<T>[];
    onRowClick: (r: T) => void;
    noResults: string;
    loading: boolean;
    error: boolean;
};

const Datatable = <T extends {}>(props: DatatableProps<T>) => {
    const datatableBodyProps: DatatableBodyProps<T> = {
        onRowClick: props.onRowClick,
        noResults: props.noResults
    };

    return <DatatableWrapper
        body={props.data}
        headers={props.headers}
    >
        <Row>
            <Col>
                <Table striped={true} hover={true} className="table-light">
                    <TableHeader
                        classes={{
                            thead: "table-header"
                        }}
                    />
                    {props.loading && <DatatableLoading colSpan={props.headers.length} />}
                    {props.error && <DatatableError colSpan={props.headers.length} />}
                    {!props.loading && !props.error && <DatatableBody {...datatableBodyProps} />}
                </Table>
            </Col>
        </Row>
    </DatatableWrapper>;
}

export default Datatable;