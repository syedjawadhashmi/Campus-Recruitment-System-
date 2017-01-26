import firebase from 'firebase';
import { firebaseAuth,firebaseDb } from '../../config/firebase';
import {
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
  REGISTER_ERROR,
  REGISTER_SUCCESS
} from './action-types';


// function authenticate(provider) {
//   return dispatch => {
//      firebaseAuth.signInWithPopup(provider)
//       .then(result => dispatch(signInSuccess(result)))
//       .catch(error => dispatch(signInError(error)));
//   };
// }



// singn in process
function customAuthenticate(credentials) {
  return dispatch => {
    firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}
export function signInWithCustom(credentials) {
  return customAuthenticate(credentials);
}
export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}
export function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  };
}




// export function customRegister(credentials) {
//   return firebaseAuth().createUserWithEmailAndPassword(credentials.email, credentials.password)
//     .then(saveUser)
//     .catch((error) => console.log('Oops', error))
// }

export function saveUser (user,credentials) {
  return firebaseDb.ref().child(`users/${user.uid}`)
    .set({
      firstName:credentials.firstName,
      lastName:credentials.lastName,
      email: user.email,
      uid: user.uid,
      role:credentials.role,
      lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
    })
    
}
// //   signup process

// function customRegister(credentials) {
//   return dispatch => {
//     firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
//       .then(result => dispatch(saveUser(result)))
//   };
// }


function customRegister(credentials) {

  console.log(credentials)
  return dispatch => {
     return dispatch(firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
     .then((result) => {
      return dispatch(saveUser(result,credentials)
       .then(result2 => dispatch(registerSuccess(result2)))
      )
    })
     )
    
     
  };
}

export function registerWithCustom(credentials) {
  return customRegister(credentials);
}

export function registerError(error) {
  return {
    type: REGISTER_ERROR,
    payload: error
  };
}
export function registerSuccess(result) {
  return {
    type: REGISTER_SUCCESS,
    payload: result
  };
}





//   signout process
export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()))
      .catch(error => dispatch(signOutError(error)));
  };
}
export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}
export function signOutError() {
  return {
    type: SIGN_OUT_ERROR
  };
}



// export function signInWithGithub() {
//   return authenticate(new firebase.auth.GithubAuthProvider());
// }
// export function signInWithGoogle() {
//   return authenticate(new firebase.auth.GoogleAuthProvider());
// }
// export function signInWithTwitter() {
//   return authenticate(new firebase.auth.TwitterAuthProvider());
// }