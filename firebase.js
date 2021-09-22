import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVgGcguSuODpNFKPwEJB_FMSbMExbVi5g",
    authDomain: "quora-870f7.firebaseapp.com",
    projectId: "quora-870f7",
    storageBucket: "quora-870f7.appspot.com",
    messagingSenderId: "625576438765",
    appId: "1:625576438765:web:387ffd64977a8863c5d5e4",
    measurementId: "G-W2K2P720SS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export {auth, provider};
  export default db;