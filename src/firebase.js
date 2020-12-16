import * as firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(config);

export default firebase.database();