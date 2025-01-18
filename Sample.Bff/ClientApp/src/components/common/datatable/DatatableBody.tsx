import { TableBody } from "react-bs-datatable";

export interface DatatableBodyProps<T extends object> {
    onRowClick: (r: T) => void;
    noResults: string;
}

const DatatableBody = <T extends object>(props: DatatableBodyProps<T>) =>
    <TableBody
        classes={{
            tbody: "table-body",
            tr: "link"
        }}
        labels={{
            noResults: props.noResults
        }}
        onRowClick={(r: T) => props.onRowClick(r)}
    />;

export default DatatableBody;