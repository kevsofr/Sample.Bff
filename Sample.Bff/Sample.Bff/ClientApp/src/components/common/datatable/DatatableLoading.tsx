import React from "react";
import { FaSpinner } from "react-icons/fa";

const DatatableLoading: React.FC<{ colSpan: number }> = ({
    colSpan
}) =>
    <tbody className="tbody table-body">
        <tr className="tbody-tr">
            <td className="tbody-td text-center text-primary" colSpan={colSpan}>
                <FaSpinner className="fa-spin" />
            </td>
        </tr>
    </tbody>;

export default DatatableLoading;