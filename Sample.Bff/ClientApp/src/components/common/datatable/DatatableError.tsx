import * as React from "react";

const DatatableError: React.FC<{ colSpan: number }> = ({
    colSpan
}) =>
    <tbody className="tbody table-body">
        <tr className="tbody-tr">
            <td className="tbody-td text-center text-danger fw-medium" colSpan={colSpan}>
                Something went wrong...
            </td>
        </tr>
    </tbody>;

export default DatatableError;