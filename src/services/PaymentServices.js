import firebase from "../firebase";

const db = firebase.collection('Payments');

const getPage = (page) => {
    if (page.end == ""){
        return db.orderBy('Payee.SubmissionDate','desc').limit(4);
    } else if (page.direction == "next") {
        return db.orderBy('Payee.SubmissionDate','desc').limit(4).startAfter(page.end);
    } else {
        return db.orderBy('Payee.SubmissionDate','desc').limitToLast(4).endBefore(page.start);
    }
}

export default {
    getPage,
};