/**
 * Created by Admin on 12/29/2016.
 */
import firebase from 'firebase';


const firebaseConfig = {
       apiKey: "AIzaSyBzUGCyxXYfRPaRGFlbXf2qo_8K-f9lP-Y",
    authDomain: "sj-react-2.firebaseapp.com",
    databaseURL: "https://sj-react-2.firebaseio.com",
    storageBucket: "sj-react-2.appspot.com"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();