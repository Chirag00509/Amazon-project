import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTIG3zh5LPYZOGxVxp-F_rJjfT30NVGt4",
  authDomain: "clone-75560.firebaseapp.com",
  projectId: "clone-75560",
  storageBucket: "clone-75560.appspot.com",
  messagingSenderId: "452364335057",
  appId: "1:452364335057:web:fb67222e459fb327d3d2f0",
  measurementId: "G-868EHVW6TD"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;