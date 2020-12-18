import React from 'react';

const Remittance = ({remittance}) => {
    return (
        <div>
            <h4>{remittance.PayorName}</h4>
            <p>PayorId: {remittance.PayorId}</p>
            <p>InvoiceNo: {remittance.InvoiceNo}</p>
            <p className="text-secondary">Amount: {remittance.Amount}</p>
        </div>
    );
};

export default Remittance;
