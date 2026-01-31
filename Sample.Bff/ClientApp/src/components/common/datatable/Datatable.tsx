import { Col, Row, Table } from "react-bootstrap";
import { DatatableWrapper, TableColumnType, TableHeader } from "react-bs-datatable";
import DatatableBody, { DatatableBodyProps } from "./DatatableBody";
import DatatableLoading from "./DatatableLoading";
import DatatableError from "./DatatableError";

export interface DatatableProps<T extends object> {
    data: T[];
    headers: TableColumnType<T>[];
    onRowClick: (r: T) => void;
    noResults: string;
    isLoading: boolean;
    isError: boolean;
};

const Datatable = <T extends object>(props: DatatableProps<T>) => {
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
                    {props.isLoading && <DatatableLoading colSpan={props.headers.length} />}
                    {props.isError && <DatatableError colSpan={props.headers.length} />}
                    {!props.isLoading && !props.isError && <DatatableBody {...datatableBodyProps} />}
                </Table>
            </Col>
        </Row>
    </DatatableWrapper>;
}

export default Datatable;