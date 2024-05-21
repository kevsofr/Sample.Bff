import { TableBody } from "react-bs-datatable";

export interface DatatableBodyProps<T extends {}> {
    onRowClick: (r: T) => void;
    noResults: string;
}

const DatatableBody = <T extends {}>(props: DatatableBodyProps<T>) =>
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