import React from 'react';

import PayeePayment from "./PayeePayment";
import Remittance from "./Remittance";

const DataTableRow = ({data}) => {
    return (
        <>
        <td>
            <PayeePayment payee={data.Payee} payment={data.Payment}/>
        </td>
        <td>
            <div className="row">
                {data.Remittance.map((value, index) => (
                    <div className="col" key={index}>
                        <Remittance remittance={value}/>
                    </div>
                ))
                }
            </div>
        </td>
        </>
    );
};

export default DataTableRow;
