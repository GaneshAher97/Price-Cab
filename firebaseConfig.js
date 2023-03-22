import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpCNfqCcK15QnWsHXu0G72KLuH9bJqf_M",
    authDomain: "vyapar-15a23.firebaseapp.com",
    projectId: "vyapar-15a23",
    storageBucket: "vyapar-15a23.appspot.com",
    messagingSenderId: "1058655624159",
    appId: "1:1058655624159:web:8a74eff5b80d0c771b026a",
    measurementId: "G-FWED1YN8LN"
};

firebase.initializeApp(firebaseConfig);
export default firebase;