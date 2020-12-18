import React from "react";
import {useCollection} from "react-firebase-hooks/firestore";

import PaymentDataService from "../services/PaymentServices";
import DataTableRow from "./DataTableRow";
import TableHeading from "./TableHeading";

const DataTable = (props) => {
    const [snapshot, loading, error] = useCollection(PaymentDataService.getPage(props.page));

    let fs = props.page.firstSeen;
    if(props.page.firstSeen === "" && !loading){
        fs = snapshot.docs[0].data().Payee.SubmissionDate;
    }
    
    function handleChange(event) {
        props.onClick({
            firstSeen: fs,
            start: snapshot.docs[0].data().Payee.SubmissionDate,
            end: snapshot.docs[snapshot.size - 1].data().Payee.SubmissionDate,
            direction: event.target.value
        })
    };

    return (
    <div className="container">
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        <table className="table text-left" style={{fontSize: '12px'}}>
        <TableHeading/>
            <tbody>
                {!loading &&
                    snapshot && 
                    snapshot.docs.map((doc, index) => (
                        <tr key={index}>
                            <DataTableRow data={doc.data()}/>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        {!loading &&
        props.page.firstSeen > snapshot.docs[0].data().Payee.SubmissionDate &&
        <button className="btn btn-primary"
            style={{float:"left"}}
            value = "prev"
            onClick = {handleChange}
        >
        Previous
        </button>
        }    
        
        {!loading &&
        snapshot.size === 4 &&
        <button className="btn btn-primary"
            style={{float:"right"}}
            value = "next"
            onClick={handleChange}
        > 
        Next 
        </button>
        }
    </div>
    )

}

export default DataTable;