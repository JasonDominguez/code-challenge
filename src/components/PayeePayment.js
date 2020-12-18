import React from 'react';

const PayeePayment = ({payee, payment}) => {
    return (
        <div>
            <h3>{payee.Attention}</h3>
            <p>Phone: {payee.Phone}</p>
            <p>Fax: {payee.Fax}</p>
            <p className="text-secondary">{payee.Address.Address1} {payee.Address.Address2}
            {payee.Address.City}, {payee.Address.StateOrProvince} {payee.Address.PostalCode} {payee.Address.Country}</p>
            <p className="text-secondary">PAN: {payment.PAN} </p>
            <p className="text-secondary">Exp: {payment.Exp} </p>
            <p className="text-secondary">CVV: {payment.CVV} </p>
        </div>
    )
};

export default PayeePayment;
